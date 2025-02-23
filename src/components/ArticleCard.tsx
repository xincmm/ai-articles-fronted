import React, { useState } from 'react';
import { Link } from 'react-router';
import { Article } from '../types/article';
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { calculateReadTime, cn } from "@/lib/utils"
import { ChevronDown, ChevronUp } from "lucide-react"
import dayjs from 'dayjs';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const starCount = Math.floor((article.score || 0) / 20);

  return (
    <div className="py-6">
      <div className="flex flex-1 flex-col">
        <Link target='_blank' to={`/article/${article.id}`}>
          <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-500 cursor-pointer leading-tight">
            {article.title}
          </h3>
        </Link>
        <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
          <span className="font-medium">{article.sourceName}</span>
          <span>·</span>
          <span>{dayjs(article.publishTimeStamp).format('YYYY-MM-DD HH:mm')}</span>
          <span>·</span>
          <span>{article.wordCount} 字（约 {calculateReadTime(article.wordCount)} 分钟）</span>
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
        <div className="relative mt-3">
          <p className={cn(
            "text-sm text-gray-600 leading-relaxed",
            !isExpanded && "line-clamp-3"
          )}>
            {article.summary}
          </p>
          <div 
            onClick={(e) => {
              e.preventDefault();
              setIsExpanded(!isExpanded);
            }}
            className="flex items-center justify-end gap-1 text-blue-600 hover:text-blue-700 text-sm mt-2 cursor-pointer group"
          >
            <span>{isExpanded ? "收起" : "展开"}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            ) : (
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            )}
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
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
      </div>
    </div>
  );
}; 