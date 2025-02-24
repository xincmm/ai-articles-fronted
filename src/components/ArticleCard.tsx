import React from "react";
import { Link } from "react-router";
import { Article } from "../types/article";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink } from "lucide-react";
import { calculateReadTime, cn } from "@/lib/utils";
import dayjs from "dayjs";

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const starCount = Math.floor((article.score || 0) / 20);

  return (
    <div className="py-6">
      <div className="flex flex-1 flex-col">
        <div className="flex items-center gap-2">
          <Link to={`/article/${article.id}`} target="_blank" className="group flex items-center gap-2 mb-2">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 cursor-pointer leading-tight">
              {article.title}
            </h3>
            <ExternalLink
              size={18}
              className="text-gray-400 group-hover:text-blue-700 transition-colors duration-200"
            />
          </Link>
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {article.tags?.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full px-2.5 py-0.5 text-sm font-medium transition-colors duration-200"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <img src={article.sourceId?.logo} alt={article.sourceName} className="w-8 h-8 rounded-full object-cover" />
            <span className="font-medium">{article.sourceName}</span>
          </div>
          <span>·</span>
          <span>{dayjs(article.publishTimeStamp).format("YYYY-MM-DD HH:mm")}</span>
          <span>·</span>
          <span>
            {article.wordCount} 字（约 {calculateReadTime(article.wordCount)} 分钟）
          </span>
          <div className="flex items-center gap-2">
            <span>·</span>
            <span>AI 评分: {article.score}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={cn(
                    "transition-colors duration-200",
                    i < starCount ? "fill-yellow-400 text-yellow-400" : "text-gray-200"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-gray-600 leading-relaxed word-break-all">{article.summary}</p>
        </div>
      </div>
    </div>
  );
};
