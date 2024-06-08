import { ChangeEvent, useEffect, useState } from "react";
import { SubmitButton } from "@/components/commons/Button";
import { TextInput, TextareaInput } from "@/components/commons/Input";
import ImageInput from "@/components/commons/Input/ImageInput";
import useDeviceState from "@/hooks/useDeviceState";

export default function AddArticleForm() {
  const [isActive, setIsActive] = useState(false);

  const [inputValue, setInputValue] = useState({
    title: "",
    content: "",
  });

  const deviceState = useDeviceState();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "title") setInputValue((prev) => ({ ...prev, title: value }));
    if (name === "content") {
      setInputValue((prev) => ({ ...prev, content: value }));
    }
  };

  useEffect(() => {
    if (inputValue.title && inputValue.content) setIsActive(true);
    else setIsActive(false);
  }, [inputValue.title, inputValue.content]);

  return (
    <>
      <header className="mt-4 flex items-center justify-between xl:mt-6">
        <h1 className="text-xl font-bold text-cool-gray-800">게시글 쓰기</h1>
        <SubmitButton isActive={isActive} handleSubmit={() => {}}>
          등록
        </SubmitButton>
      </header>

      <form className="mt-6">
        <h1 className="mb-3 text-sm font-bold text-cool-gray-800 md:text-lg">
          *제목
        </h1>
        <TextInput
          name="title"
          value={inputValue.title}
          onChange={handleChange}
          placeholder="제목을 입력해주세요"
        />

        <h1 className="mb-3 mt-6 text-sm font-bold text-cool-gray-800 md:text-lg">
          *내용
        </h1>
        <TextareaInput
          name="content"
          size={deviceState === "pc" ? "xl" : "lg"}
          value={inputValue.content}
          onChange={handleChange}
          placeholder="내용을 입력해주세요"
        />

        <h1 className="mb-3 mt-6 text-sm font-bold text-cool-gray-800 md:text-lg">
          이미지
        </h1>
        <ImageInput handleImgChange={(file: File | null) => {}} />
      </form>
    </>
  );
}
