import { useEffect, useState } from "react";
import type { Article, DataFormat } from "@pandamarket-api";
import useDeviceState from "@/hooks/useDeviceState";
import Device from "@/variables/Device";

import ArticleCard from "./ArticleCard";

export default function BestArticles({
  bestArticlesData,
}: {
  bestArticlesData: DataFormat<Article>;
}) {
  const { list: initialData } = bestArticlesData;

  const [articleList, setArticleList] = useState<Article[]>([]);
  const deviceState = useDeviceState();

  useEffect(() => {
    if (!deviceState) return;

    if (deviceState === Device.Mobile) {
      setArticleList([...initialData.slice(0, 1)]);
    }

    if (deviceState === Device.Tablet) {
      setArticleList([...initialData.slice(0, 2)]);
    }

    if (deviceState === Device.PC) {
      setArticleList([...initialData]);
    }
  }, [deviceState]);

  return (
    <div className="mt-6">
      <h1 className="text-xl font-bold text-cool-gray-900">베스트 게시글</h1>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-6">
        {articleList.map((article) => (
          <ArticleCard key={article.id} data={article} />
        ))}
      </div>
    </div>
  );
}
