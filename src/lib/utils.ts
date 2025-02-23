import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateReadTime(wordCount: number | undefined): number {
  if (!wordCount) return 0;
  return Math.ceil(wordCount / 300);
}