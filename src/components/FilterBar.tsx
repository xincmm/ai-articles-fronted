import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { useAtom } from "jotai"
import { filterAtom, TimeRange, Language, SortBy } from "@/atoms/filter"

const timeRangeOptions = [
  { value: 'all', label: '时间不限' },
  { value: 'today', label: '今天' },
  { value: 'week', label: '本周' },
  { value: 'month', label: '本月' },
] as const

const languageOptions = [
  { value: 'all', label: '语言不限' },
  { value: 'zh', label: '中文' },
  { value: 'en', label: '英文' },
] as const

const sortByOptions = [
  { value: 'default', label: '默认排序' },
  { value: 'latest', label: '最新发布' },
  { value: 'popular', label: '最多阅读' },
] as const

export function FilterBar({ className }: { className?: string }) {
  const [filter, setFilter] = useAtom(filterAtom)

  const handleTimeRangeChange = (value: TimeRange) => {
    setFilter((prev) => ({ ...prev, timeRange: value }))
  }

  const handleLanguageChange = (value: Language) => {
    setFilter((prev) => ({ ...prev, language: value }))
  }

  const handleSortByChange = (value: SortBy) => {
    setFilter((prev) => ({ ...prev, sortBy: value }))
  }

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Select value={filter.timeRange} onValueChange={handleTimeRangeChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="时间不限" />
        </SelectTrigger>
        <SelectContent>
          {timeRangeOptions.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={filter.language} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="语言不限" />
        </SelectTrigger>
        <SelectContent>
          {languageOptions.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={filter.sortBy} onValueChange={handleSortByChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="默认排序" />
        </SelectTrigger>
        <SelectContent>
          {sortByOptions.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
} 