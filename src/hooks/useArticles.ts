import { useQuery } from '@tanstack/react-query';
import { Article } from '../types/article';
import { FilterState } from '@/atoms/filter';
import { API_BASE_URL } from '@/config/api';

interface ArticlesResponse {
  success: boolean;
  data: {
    dataList: Article[];
  };
}

type PartialFilterState = Partial<FilterState>;

interface UseArticlesParams extends PartialFilterState {
  page?: number;
  pageSize?: number;
  sourceId?: string | null;
}

const fetchArticles = async ({ 
  page = 1, 
  pageSize = 20, 
  sourceId,
  timeRange = 'all',
  language = 'all',
  sortBy = 'default',
}: UseArticlesParams) => {
  const params = new URLSearchParams({
    page: page.toString(),
    pageSize: pageSize.toString(),
  });
  
  if (sourceId) {
    params.append('sourceId', sourceId);
  }

  if (timeRange && timeRange !== 'all') {
    params.append('timeRange', timeRange);
  }

  if (language && language !== 'all') {
    params.append('language', language);
  }

  if (sortBy && sortBy !== 'default') {
    params.append('sortBy', sortBy);
  }

  const response = await fetch(
    `${API_BASE_URL}/articles?${params.toString()}`
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