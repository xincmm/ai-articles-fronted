import { useQuery } from '@tanstack/react-query'
import { Source } from '@/types/article'

interface SourcesResponse {
  success: boolean
  data: {
    dataList: Source[]
  }
}

export function Sources() {
  const { isPending, error, data } = useQuery<SourcesResponse>({
    queryKey: ['sources'],
    queryFn: () =>
      fetch('http://localhost:3000/api/sources?page=1&pageSize=1000').then((res) =>
        res.json(),
      ),
  })

  if (isPending) return <div className="text-center">加载中...</div>

  if (error) return <div className="text-red-500">发生错误: {error.message}</div>

  return (
    <div className="space-y-2">
      {data?.data.dataList.map((source) => (
        <div 
          key={source.id} 
          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
        >
          <img 
            src={source.image} 
            alt={source.name} 
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-900">
            {source.name}
          </span>
        </div>
      ))}
    </div>
  )
} 