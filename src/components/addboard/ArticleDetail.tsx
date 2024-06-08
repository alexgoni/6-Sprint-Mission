import { ChangeEvent, useEffect, useState } from "react";
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
import { formatDate } from "@/libs/date";
import getCookie from "@/libs/cookie";

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
              src={data?.writer.image ?? "/images/profile.svg"}
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
    // TODO: nextCursor 기반 페이지네이션
    const res = await axiosFetch<DataFormat<CommentType>>({
      url: `/articles/${id}/comments`,
      params: {
        limit: 10,
      },
    });

    setCommentList(res?.data?.list);
  };

  useEffect(() => {
    if (!id) return;
    getCommentList();
  }, [id]);

  useEffect(() => {
    if (comment) setIsActive(true);
    else setIsActive(false);
  }, [comment]);

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
        {commentList.map((data) => (
          <Comment key={data.id} data={data} />
        ))}
      </div>
    </>
  );
}

export function GoBackButton() {
  return (
    <div className="mt-6 flex justify-center">
      <LinkButton href="/boards" round="xl">
        <div className="flex items-center gap-[10px] px-4">
          <span>목록으로 돌아가기</span>
          <Image src="/images/ic_back.svg" alt="back" width={24} height={24} />
        </div>
      </LinkButton>
    </div>
  );
}
