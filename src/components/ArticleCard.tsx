import React, { useState } from 'react';
import { Article } from '../types/article';
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronUp } from "lucide-react"

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // 计算AI评分对应的星星数量（满分100对应5颗星）
  const starCount = Math.floor((article.score || 0) / 20);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-0">
        <div className="flex gap-6 p-6">
          {article.cover && (
            <div className="relative h-48 w-48 flex-shrink-0 overflow-hidden rounded-lg">
              <img
                src={article.cover}
                alt={article.title}
                className="absolute inset-0 h-full w-full object-cover hover:scale-105 transition-transform duration-200"
              />
            </div>
          )}
          <div className="flex flex-1 flex-col">
            <h3 className="text-2xl font-semibold text-blue-600 hover:text-blue-700 cursor-pointer leading-tight">
              {article.title}
            </h3>
            <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
              <span className="font-medium">{article.sourceName}</span>
              <span>·</span>
              <span>{article.publishDateStr}</span>
              <span>·</span>
              <span>{article.wordCount} 字（约 {article.readTime} 分钟）</span>
              <div className="flex items-center gap-2">
                <span>·</span>
                <span>AI 评分: {article.score}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={cn(
                        "transition-colors duration-200",
                        i < starCount ? "fill-yellow-400 text-yellow-400" : "text-gray-200"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="relative mt-4">
              <p className={cn(
                "text-sm text-gray-600 leading-relaxed",
                !isExpanded && "line-clamp-3"
              )}>
                {article.summary}
              </p>
              <div 
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm mt-2 cursor-pointer group"
              >
                <span>{isExpanded ? "收起" : "展开"}</span>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                ) : (
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                )}
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {article.tags?.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary" 
                  className="bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-sm font-medium transition-colors duration-200"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 