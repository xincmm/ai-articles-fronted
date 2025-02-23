export type Priority = 'LOW' | 'MEDIUM' | 'HIGH';
export type ResourceType = 'ARTICLE';

export interface MainPoint {
  point: string;
  explanation?: string;
}

export interface Source {
  id: string;
  name: string;
  wechatId?: string;
  source?: string;
  description?: string;
  rssUrl?: string;
  logo?: string;
  category?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Article {
  id: string;
  title: string;
  publishTimeStamp?: number;
  processTimeStamp?: number;
  url?: string;
  readCount?: number;
  wordCount?: number;
  oneSentenceSummary?: string;
  summary?: string;
  category?: string;
  subcategory?: string;
  tags?: string[];
  mainPoints?: MainPoint[];
  keyQuotes?: string[];
  score?: number;
  language?: string;
  sourceId: {
    id: string;
    wechatId?: string;
  };
  sourceName?: string;
  createdAt?: Date;
  updatedAt?: Date;
} 