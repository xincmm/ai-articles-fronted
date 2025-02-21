import { Sidebar } from "./Sidebar";
import { ArticleList } from "./ArticleList";
import { Link } from "react-router";
import { GithubRepo } from "./GithubRepo";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar className="w-64 border-r" />
      <main className="flex-1 bg-background">
        <div className="container mx-auto p-4">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Link to="/about" className="text-blue-500 hover:text-blue-700">
                关于页面
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <GithubRepo owner="facebook" repo="react" />
              <GithubRepo owner="vitejs" repo="vite" />
            </div>
          </div>
        </div>
        <ArticleList />
      </main>
    </div>
  );
}
