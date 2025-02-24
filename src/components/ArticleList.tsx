import React, { useEffect, useRef } from "react";
import { useArticles } from "../hooks/useArticles";
import { FilterBar } from "./FilterBar";
import { ArticleCard } from "./ArticleCard";
import { useAtom } from "jotai";
import { selectedSourceIdAtom, filterAtom } from "@/atoms/filter";
import { Loader2 } from "lucide-react";

export const ArticleList: React.FC = () => {
  const [selectedSourceId] = useAtom(selectedSourceIdAtom);
  const [filter] = useAtom(filterAtom);
  const containerRef = useRef<HTMLDivElement>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const { 
    data, 
    isLoading, 
    error, 
    fetchNextPage, 
    hasNextPage, 
    isFetchingNextPage 
  } = useArticles({
    sourceId: selectedSourceId,
    ...filter,
  });

  useEffect(() => {
    const loadMoreElement = loadMoreRef.current;
    if (!loadMoreElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        root: containerRef.current,
        threshold: 0.1,
        rootMargin: '200px',
      }
    );

    observer.observe(loadMoreElement);

    return () => {
      observer.disconnect();
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

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

    const articles = data?.pages.flatMap(page => page.data.dataList) ?? [];

    if (!articles.length) {
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
      <div 
        ref={containerRef} 
        className="flex-1 overflow-y-auto px-16"
      >
        <div className="divide-y divide-gray-200">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
          
          <div ref={loadMoreRef} className="h-20 flex items-center justify-center">
            {isFetchingNextPage ? (
              <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
            ) : hasNextPage ? (
              <span className="text-sm text-gray-500">向下滚动加载更多</span>
            ) : (
              <span className="text-sm text-gray-500">没有更多文章了</span>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col">
      <div className="bg-white sticky top-0 z-10 px-16 py-4 border-b">
        <FilterBar />
        <div className="mt-2 text-sm text-gray-500">
            共 {data?.pages[0].data.totalCount} 篇文章
          </div>
      </div>
      {renderContent()}
    </div>
  );
};
