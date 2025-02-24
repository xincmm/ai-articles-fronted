import { useQuery } from '@tanstack/react-query'
import { Source } from '@/types/article'
import { useAtom } from 'jotai'
import { selectedSourceIdAtom, selectedSourceAtom } from '@/atoms/filter'
import clsx from 'clsx'
import { API_BASE_URL } from '@/config/api'

interface SourcesResponse {
  success: boolean
  data: {
    dataList: Source[]
  }
}

export function Sources() {
  const [selectedSourceId, setSelectedSourceId] = useAtom(selectedSourceIdAtom)
  const [_, setSelectedSource] = useAtom(selectedSourceAtom)
  
  const { isPending, error, data } = useQuery<SourcesResponse>({
    queryKey: ['sources'],
    queryFn: () =>
      fetch(`${API_BASE_URL}/sources?page=1&pageSize=1000`).then((res) =>
        res.json(),
      ),
  })

  if (isPending) return <div className="text-center">加载中...</div>

  if (error) return <div className="text-red-500">发生错误: {error.message}</div>

  const handleSourceClick = (sourceId: string | null) => {
    setSelectedSourceId(sourceId)
    
    if (sourceId === null) {
      setSelectedSource(null)
    } else {
      const source = data?.data.dataList.find(s => s.id === sourceId) || null
      setSelectedSource(source)
    }
  }

  return (
    <div className="space-y-2 pb-4">
      <div
        className={clsx(
          "flex items-center gap-3 h-[48px] px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors",
          selectedSourceId === null && "bg-gray-100"
        )}
        onClick={() => handleSourceClick(null)}
      >
        <span className="text-sm font-medium text-gray-900">全部来源</span>
      </div>
      {data?.data.dataList.map((source) => (
        <div 
          key={source.id} 
          className={clsx(
            "flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors",
            selectedSourceId === source.id && "bg-gray-100"
          )}
          onClick={() => handleSourceClick(source.id)}
        >
          <img 
            src={`${source.logo}`} 
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