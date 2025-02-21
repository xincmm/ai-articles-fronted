import { useQuery } from '@tanstack/react-query';
import { Article } from '../types/article';

interface ArticlesResponse {
  success: boolean;
  data: {
    dataList: Article[];
  };
}

interface UseArticlesParams {
  page?: number;
  pageSize?: number;
}

const fetchArticles = async ({ page = 1, pageSize = 20 }: UseArticlesParams) => {
  const response = await fetch(
    `http://localhost:3000/api/articles?page=${page}&pageSize=${pageSize}`
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useArticles = (params: UseArticlesParams = {}) => {
  return useQuery<ArticlesResponse>({
    queryKey: ['articles', params],
    queryFn: () => fetchArticles(params),
  });
}; 