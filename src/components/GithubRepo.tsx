import { useQuery } from '@tanstack/react-query'

interface GithubRepoProps {
  owner: string
  repo: string
}

export function GithubRepo({ owner, repo }: GithubRepoProps) {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData', owner, repo],
    queryFn: () =>
      fetch(`https://api.github.com/repos/${owner}/${repo}`).then((res) =>
        res.json(),
      ),
  })

  if (isPending) return <div className="text-center">加载中...</div>

  if (error) return <div className="text-red-500">发生错误: {error.message}</div>

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
      <p className="text-gray-600 mb-4">{data.description}</p>
      <div className="flex gap-4">
        <div className="flex items-center">
          <span className="mr-1">👀</span>
          <strong>{data.subscribers_count}</strong>
        </div>
        <div className="flex items-center">
          <span className="mr-1">✨</span>
          <strong>{data.stargazers_count}</strong>
        </div>
        <div className="flex items-center">
          <span className="mr-1">🍴</span>
          <strong>{data.forks_count}</strong>
        </div>
      </div>
    </div>
  )
} 