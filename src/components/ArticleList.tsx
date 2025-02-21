import React from 'react';
import { useArticles } from '../hooks/useArticles';
import { FilterBar } from "./FilterBar"
import { ArticleCard } from "./ArticleCard"

export const ArticleList: React.FC = () => {
  const { data, isLoading, error } = useArticles();

  if (isLoading) {
    return <div>加载中...</div>;
  }

  if (error) {
    return <div>加载出错: {error.message}</div>;
  }

  return (
    <div className="h-full p-8">
      <FilterBar />
      <div className="mt-6 space-y-4">
        {data?.data.dataList.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}; 