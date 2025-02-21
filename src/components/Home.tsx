import { Sidebar } from "./Sidebar"
import { ArticleList } from "./ArticleList"

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar className="w-64 border-r" />
      <main className="flex-1 bg-background">
        <ArticleList />
      </main>
    </div>
  )
} 