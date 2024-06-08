import { useRouter } from "next/router";
import { MainLayout } from "@/components/commons/Layout";
import Navbar from "@/components/commons/Navbar";
import {
  ArticleComment,
  ArticleContent,
  GoBackButton,
} from "@/components/addboard";

export default function ArticleDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Navbar />
      <MainLayout>
        <ArticleContent id={id} />
        <ArticleComment id={id} />
        <GoBackButton />
      </MainLayout>
    </>
  );
}
