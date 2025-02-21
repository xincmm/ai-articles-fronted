import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function FilterBar() {
  return (
    <div className="flex items-center gap-4">
      <Select defaultValue="all">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="时间不限" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">时间不限</SelectItem>
          <SelectItem value="today">今天</SelectItem>
          <SelectItem value="week">本周</SelectItem>
          <SelectItem value="month">本月</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="all">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="语言不限" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">语言不限</SelectItem>
          <SelectItem value="zh">中文</SelectItem>
          <SelectItem value="en">英文</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="default">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="默认排序" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="default">默认排序</SelectItem>
          <SelectItem value="latest">最新发布</SelectItem>
          <SelectItem value="popular">最多阅读</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
} 