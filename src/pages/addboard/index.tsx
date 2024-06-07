import { SubmitButton } from "@/components/commons/Button";
import { TextInput } from "@/components/commons/Input";
import ImageInput from "@/components/commons/Input/ImageInput";
import { MainLayout } from "@/components/commons/Layout";
import Navbar from "@/components/commons/Navbar";

export default function AddBoard() {
  return (
    <>
      <Navbar />
      <MainLayout>
        <header className="mt-4 flex items-center justify-between xl:mt-6">
          <h1 className="text-xl font-bold text-cool-gray-800">게시글 쓰기</h1>
          <SubmitButton isActive={false} handleSubmit={() => {}}>
            등록
          </SubmitButton>
        </header>
        <form className="mt-6">
          <h1 className="mb-3 text-sm font-bold text-cool-gray-800 md:text-lg">
            *제목
          </h1>
          <TextInput placeholder="제목을 입력해주세요" />

          <h1 className="mb-3 mt-6 text-sm font-bold text-cool-gray-800 md:text-lg">
            *내용
          </h1>
          <TextInput placeholder="내용을 입력해주세요" />

          <h1 className="mb-3 mt-6 text-sm font-bold text-cool-gray-800 md:text-lg">
            이미지
          </h1>
          <ImageInput handleImgChange={(file: File | null) => {}} />
        </form>
      </MainLayout>
    </>
  );
}
