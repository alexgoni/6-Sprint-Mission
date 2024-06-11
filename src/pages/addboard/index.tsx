import Navbar from "@/components/commons/Navbar";
import { MainLayout } from "@/components/commons/Layout";
import { AddArticleForm } from "@/components/addboard";

export default function AddBoard() {
  return (
    <>
      <Navbar />
      <MainLayout>
        <AddArticleForm />
      </MainLayout>
    </>
  );
}
