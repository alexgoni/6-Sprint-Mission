import { useEffect, useState } from "react";
import type { MouseEvent, ChangeEvent } from "react";
import type { Article, DataFormat } from "@pandamarket-api";
import { LinkButton } from "@/components/commons/Button";
import { SearchInput } from "@/components/commons/Input";
import Dropdown from "@/components/commons/Dropdown";
import Pagination from "@/components/commons/Pagination";
import useAxiosFetch from "@/hooks/useAxiosFetch";
import { SortTypeAtAPI, SortTypeAtUI } from "@/variables/SortType";
import ArticlePreview from "./ArticlePreview";

const PAGE_SIZE = 5;

export default function ArticleList({
  articleListData,
}: {
  articleListData: DataFormat<Article>;
}) {
  const { list: initialData, totalCount: initialTotalCount } = articleListData;

  const [articleList, setArticleList] = useState<Article[]>([...initialData]);
  const [currentOrder, setCurrentOrder] = useState<SortTypeAtUI>(
    SortTypeAtUI.Recent,
  );
  const [keyword, setKeyword] = useState("");
  const [totalCount, setTotalCount] = useState(initialTotalCount);
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, error, axiosFetch } = useAxiosFetch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleOrder = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;

    setCurrentOrder(SortTypeAtUI[name as keyof typeof SortTypeAtUI]);
  };

  const handlePageChange = (targetPage: number) => {
    setCurrentPage(targetPage);
  };

  const getArticles = async () => {
    const res = await axiosFetch<DataFormat<Article>>({
      url: "/articles",
      params: {
        orderBy:
          currentOrder === SortTypeAtUI.Recent
            ? SortTypeAtAPI.Recent
            : SortTypeAtAPI.Like,
        keyword,
        pageSize: PAGE_SIZE,
        page: currentPage,
      },
    });

    setArticleList(res?.data?.list);
    setTotalCount(res?.data?.totalCount);
  };

  useEffect(() => {
    if (keyword) setCurrentPage(1);
    getArticles();
  }, [currentOrder, keyword, currentPage]);

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-cool-gray-900">게시글</h1>
        <LinkButton href="/addboard">글쓰기</LinkButton>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2 md:mt-6 md:gap-4">
        <SearchInput
          value={keyword}
          placeholder="검색할 상품을 입력해주세요"
          onChange={handleInputChange}
        />
        <Dropdown.Order currentOrder={currentOrder} handleOrder={handleOrder} />
      </div>

      <div className="mt-6">
        {articleList.map((article) => (
          <ArticlePreview key={article.id} data={article} />
        ))}
      </div>

      {totalCount! > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(totalCount! / PAGE_SIZE)}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
}
