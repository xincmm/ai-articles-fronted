import React from 'react';
import { useArticles } from '../hooks/useArticles';
import { FilterBar } from "./FilterBar"
import { ArticleCard } from "./ArticleCard"
import { useAtom } from 'jotai';
import { selectedSourceIdAtom, filterAtom } from '@/atoms/filter';
import { Loader2 } from "lucide-react";

export const ArticleList: React.FC = () => {
  const [selectedSourceId] = useAtom(selectedSourceIdAtom);
  const [filter] = useAtom(filterAtom);
  
  const { data, isLoading, error } = useArticles({
    sourceId: selectedSourceId,
    ...filter
  });

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
            <span className="text-gray-500">加载中...</span>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-red-500 text-lg mb-2">加载出错</div>
            <div className="text-gray-500">{error.message}</div>
          </div>
        </div>
      );
    }

    if (!data?.data.dataList.length) {
      return (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-gray-500 text-lg">暂无文章</div>
            <div className="text-gray-400 mt-2">试试切换其他来源或清除筛选条件</div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex-1 overflow-y-auto px-8 py-4">
        <div className="space-y-4">
          {data.data.dataList.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col">
      <div className="bg-white z-10 px-8 py-4">
        <FilterBar />
      </div>
      {renderContent()}
    </div>
  );
}; 