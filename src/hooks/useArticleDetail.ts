import { useQuery } from '@tanstack/react-query';
import { Article } from '@/types/article';
import { API_BASE_URL } from '@/config/api';

interface ArticleDetailResponse {
  success: boolean;
  data: Article;
}

const fetchArticleDetail = async (articleId: string) => {
  const response = await fetch(
    `${API_BASE_URL}/articles/${articleId}`
  );
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  return response.json();
};

export const useArticleDetail = (articleId: string) => {
  return useQuery<ArticleDetailResponse>({
    queryKey: ['article', articleId],
    queryFn: () => fetchArticleDetail(articleId),
    enabled: !!articleId,
  });
}; 