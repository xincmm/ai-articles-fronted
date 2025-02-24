import React from 'react';
import { useParams } from 'react-router';
import { Badge } from "@/components/ui/badge";
import { useArticleDetail } from '@/hooks/useArticleDetail';
import dayjs from 'dayjs';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useArticleDetail(id || '');

  if (isLoading) {
    return <div className="container mx-auto p-6">Loading...</div>;
  }

  if (error || !data?.data) {
    return <div className="container mx-auto p-6">Article not found</div>;
  }

  const article = data.data;

  console.log(article);

  return (
    <div className="flex h-[calc(100vh-58px)]">
      <div className="w-[420px] overflow-y-auto p-4 border-r">
        <article>
          <h5 className="text-2xl border-b border-gray-200 pb-3 font-bold text-gray-900 mb-4">
            智能总结
          </h5>
          
          <div className="mb-4 flex flex-wrap gap-2">
            {article.tags?.map((tag) => (
              <Badge 
                key={tag}
                variant="secondary"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full px-3 py-0.5 text-sm font-medium transition-colors duration-200"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
            <span className="font-medium">{article.sourceName}</span>
            <span>·</span>
            <span>{dayjs(article.publishTimeStamp).format('YYYY-MM-DD HH:mm')}</span>
          </div>

          <div className="prose prose-sm max-w-none">
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h2 className="text-base font-semibold mb-2">一句话总结</h2>
              <p className="text-gray-600 text-sm">{article.oneSentenceSummary}</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h2 className="text-base font-semibold mb-2">摘要</h2>
              <p className="text-gray-600 text-sm">{article.summary}</p>
            </div>

            {article.mainPoints && article.mainPoints.length > 0 && (
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h2 className="text-base font-semibold mb-2">主要内容</h2>
                <ul className="space-y-2">
                  {article.mainPoints.map((point, index) => (
                    <li key={index} className="space-y-1">
                      <p className="font-medium text-sm">{index + 1}. {point.point}</p>
                      <p className="text-gray-600 text-xs">{point.explanation}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {article.keyQuotes && article.keyQuotes.length > 0 && (
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h2 className="text-base font-semibold mb-2">文章金句</h2>
                <div className="space-y-3">
                  {article.keyQuotes.map((quote, index) => (
                    <div 
                      key={index} 
                      className="pl-4 border-l-2 border-gray-300 text-gray-600 text-sm"
                    >
                      {quote}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </div>

      <div className="flex-1 h-full">
        <iframe
          src={`http://localhost:57267/${article.sourceId?.id}/${id}/`}
          className="w-full h-full border-0"
          title="Article Content"
        />
      </div>
    </div>
  );
};

export default ArticleDetail;
