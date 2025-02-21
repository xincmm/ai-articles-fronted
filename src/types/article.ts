export type Priority = 'LOW' | 'MEDIUM' | 'HIGH';
export type ResourceType = 'ARTICLE';

export interface MainPoint {
  point: string;
  explanation?: string;
}

export interface Source {
  id: string;
  name: string;
  description?: string;
  rssUrl?: string;
  image?: string;
  language?: string;
  priority: Priority;
  priorityScore?: number;
  resourceType: ResourceType;
  category?: string;
  countInPast3Months?: number;
  qualifiedCountInPast3Months?: number;
  readCountInPast3Months?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Article {
  id: string;
  notExist?: any;
  originalTitle?: string;
  title: string;
  oneSentenceSummary?: string;
  summary?: string;
  tags?: string[];
  mainPoints?: MainPoint[];
  keyQuotes?: string[];
  url?: string;
  domain?: string;
  cover?: string;
  language?: string;
  languageDesc?: string;
  sourceId: string;
  sourceName?: string;
  sourceImage?: string;
  mainDomain?: string;
  mainDomainDesc?: string;
  aiSubCategory?: string;
  aiSubCategoryDesc?: string;
  category?: string;
  categoryDesc?: string;
  resourceType?: string;
  resourceTypeDesc?: string;
  score?: number;
  readCount?: number;
  wordCount?: number;
  readTime?: number;
  authors?: string[];
  publishTimeStamp?: number;
  publishDateStr?: string;
  publishDateTimeStr?: string;
  qualified?: boolean;
  processFlowStatus?: string;
  processFlowStatusDesc?: string;
  createdAt?: Date;
  updatedAt?: Date;
} 