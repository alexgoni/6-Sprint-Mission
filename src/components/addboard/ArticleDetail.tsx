import { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import { LinkButton, SubmitButton } from "@/components/commons/Button";
import Comment from "@/components/commons/Comment";
import { TextareaInput } from "@/components/commons/Input";

export function ArticleContent() {
  return (
    <>
      <header className="mt-6 border-b xl:mt-8">
        <div className="flex items-start justify-between">
          <h1 className="text-xl font-bold text-cool-gray-800">
            맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?
          </h1>
          <Image
            src="/images/ic_kebab.svg"
            alt="kebab"
            width={24}
            height={24}
          />
        </div>
        <div className="my-4 flex items-center">
          <div className="mr-4 flex items-center gap-2">
            <Image
              src="/images/profile.svg"
              alt="profile"
              width={24}
              height={24}
            />
            <span className="text-sm text-cool-gray-600">총명한판다</span>
            <span className="text-xs text-cool-gray-400">2024. 01. 02</span>
          </div>
          <div className="flex items-center gap-1 border-l pl-4">
            <Image
              src="/images/ic_heart.svg"
              alt="heart"
              width={24}
              height={24}
            />
            <span className="text-sm text-cool-gray-500">123</span>
          </div>
        </div>
      </header>

      <main className="mb-10 mt-4 md:mb-[60px]">
        맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?
      </main>
    </>
  );
}

export function CommentForm() {
  const [comment, setComment] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

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
        <SubmitButton isActive={isActive} handleSubmit={() => {}}>
          등록
        </SubmitButton>
      </div>
    </>
  );
}

export function CommentList() {
  return (
    <div className="mt-4 md:mt-6">
      <Comment />
      <Comment />
      <Comment />
    </div>
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
