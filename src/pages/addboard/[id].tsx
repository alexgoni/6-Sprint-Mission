import { MainLayout } from "@/components/commons/Layout";
import Navbar from "@/components/commons/Navbar";
import {
  ArticleContent,
  CommentForm,
  CommentList,
  GoBackButton,
} from "@/components/addboard";

export default function ArticleDetail() {
  return (
    <>
      <Navbar />
      <MainLayout>
        <ArticleContent />
        <CommentForm />
        <CommentList />
        <GoBackButton />
      </MainLayout>
    </>
  );
}
