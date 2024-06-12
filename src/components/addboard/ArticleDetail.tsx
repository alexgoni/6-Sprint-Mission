import { ChangeEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Article,
  CommentRequestBody,
  CommentType,
  DataFormat,
} from "@pandamarket-api";
import { LinkButton, SubmitButton } from "@/components/commons/Button";
import Comment from "@/components/commons/Comment";
import { TextareaInput } from "@/components/commons/Input";
import useAxiosFetch from "@/hooks/useAxiosFetch";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { formatDate } from "@/libs/date";
import { getCookie } from "@/libs/cookie";

export function ArticleContent({ id }: { id: string | string[] | undefined }) {
  const [data, setData] = useState<Article>();
  const { isLoading, error, axiosFetch } = useAxiosFetch();

  const getArticleData = async () => {
    const res = await axiosFetch<Article>({
      url: `/articles/${id}`,
    });

    setData(res.data);
  };

  useEffect(() => {
    if (!id) return;
    getArticleData();
  }, [id]);

  return (
    <>
      <header className="mt-6 border-b xl:mt-8">
        <div className="flex items-start justify-between">
          <h1 className="text-xl font-bold text-cool-gray-800">
            {data?.title}
          </h1>
          <Image
            src="/images/ic_kebab.svg"
            alt="kebab"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
        <div className="my-4 flex items-center">
          <div className="mr-4 flex items-center gap-2">
            <Image
              src={data?.writer.image ?? "/images/ic_profile.svg"}
              alt="profile"
              width={24}
              height={24}
            />
            <span className="text-sm text-cool-gray-600">
              {data?.writer.nickname}
            </span>
            <time
              dateTime={data?.createdAt}
              className="text-xs text-cool-gray-400"
            >
              {formatDate(data?.createdAt)}
            </time>
          </div>
          <div className="flex items-center gap-1 border-l pl-4">
            <Image
              src="/images/ic_heart.svg"
              alt="heart"
              width={24}
              height={24}
            />
            <span className="text-sm text-cool-gray-500">
              {data?.likeCount}
            </span>
          </div>
        </div>
      </header>

      <main className="mb-10 mt-4 md:mb-[60px]">
        {data?.image && (
          <Image src={data?.image} alt="content" width={200} height={200} />
        )}
        {data?.content}
      </main>
    </>
  );
}

export function ArticleComment({ id }: { id: string | string[] | undefined }) {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState<CommentType[]>([]);
  const [isActive, setIsActive] = useState(false);
  const [cursor, setCursor] = useState<number | null>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(sentinelRef);
  const { isLoading, error, axiosFetch } = useAxiosFetch();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = async () => {
    const res = await axiosFetch<CommentRequestBody, CommentType>({
      method: "POST",
      url: `/articles/${id}/comments`,
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
      data: {
        content: comment,
      },
    });

    if ([200, 201].includes(res.status)) {
      setComment("");
      setCommentList((prev) => [res.data, ...prev]);
    }
  };

  const getCommentList = async () => {
    const res = await axiosFetch<DataFormat<CommentType>>({
      url: `/articles/${id}/comments`,
      params: {
        limit: 10,
        cursor,
      },
    });

    if (res.data.nextCursor !== undefined) setCursor(res?.data?.nextCursor);
    setCommentList((prev) => {
      const newComments = res.data.list.filter(
        (newComment) =>
          !prev.some((prevComment) => prevComment.id === newComment.id),
      );
      return [...prev, ...newComments];
    });
  };

  useEffect(() => {
    if (!id) return;
    getCommentList();
  }, [id]);

  useEffect(() => {
    if (comment) setIsActive(true);
    else setIsActive(false);
  }, [comment]);

  useEffect(() => {
    if (isIntersecting && cursor) getCommentList();
  }, [isIntersecting]);

  return (
    <>
      <h1 className="mb-4 font-semibold text-cool-gray-900">댓글 달기</h1>
      <TextareaInput
        name="comment"
        size="sm"
        value={comment}
        onChange={handleChange}
        placeholder="댓글을 입력해주세요."
      />
      <div className="mt-4 flex justify-end">
        <SubmitButton isActive={isActive} handleSubmit={handleSubmit}>
          등록
        </SubmitButton>
      </div>

      <div className="mt-4 md:mt-6">
        {commentList.length > 0 ? (
          commentList.map((data) => <Comment key={data.id} data={data} />)
        ) : (
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/Img_reply_empty.png"
              alt="empty"
              width={140}
              height={140}
              priority
            />
            <span className="text-center text-cool-gray-400">
              아직 댓글이 없어요,
              <br />
              지금 댓글을 달아보세요!
            </span>
          </div>
        )}
        <div ref={sentinelRef} className="h-10 opacity-0" />
      </div>
    </>
  );
}

export function GoBackButton() {
  return (
    <div className="flex justify-center">
      <LinkButton href="/boards" round="xl">
        <div className="flex items-center gap-[10px] px-4">
          <span>목록으로 돌아가기</span>
          <Image src="/images/ic_back.svg" alt="back" width={24} height={24} />
        </div>
      </LinkButton>
    </div>
  );
}
