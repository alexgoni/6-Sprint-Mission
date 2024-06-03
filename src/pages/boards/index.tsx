import Navbar from "@/components/commons/Navbar";
import Layout from "@/components/commons/Layout";
import BestArticles from "@/components/boards/BestArticles";
import ArticleList from "@/components/boards/ArticleList";
import { Article, DataFormat } from "@/@types/api_response";
import axios from "@/libs/axios";

export default function FreeBoard({
  bestArticlesData,
  articleListData,
}: {
  bestArticlesData: DataFormat<Article>;
  articleListData: DataFormat<Article>;
}) {
  return (
    <>
      <Navbar />
      <Layout.Main>
        <BestArticles bestArticlesData={bestArticlesData} />
        <ArticleList articleListData={articleListData} />
      </Layout.Main>
    </>
  );
}

const ARTICLE_LIST_PAGE_SIZE = 5;
const BEST_ARTICLES_MAX_PAGE_SIZE = 3;

export async function getStaticProps() {
  try {
    const articleListResponse = await axios({
      url: "/articles",
      params: {
        pageSize: ARTICLE_LIST_PAGE_SIZE,
      },
    });

    const articleListData = articleListResponse?.data;

    const bestArticlesResponse = await axios({
      url: "/articles",
      params: {
        orderBy: "like",
        pageSize: BEST_ARTICLES_MAX_PAGE_SIZE,
      },
    });

    const bestArticlesData = bestArticlesResponse?.data;

    return {
      props: {
        bestArticlesData,
        articleListData,
      },
      revalidate: 60 * 60,
    };
  } catch (error) {
    return {
      props: {
        bestArticlesData: null,
        articleListData: null,
        error: "Error fetching data",
      },
      revalidate: 60 * 60,
    };
  }
}
