import { Sidebar } from "./Sidebar";
import { ArticleList } from "./ArticleList";

export default function Home() {
  return (
    <div className="relative h-[calc(100vh-58px)]">
      <div className="fixed top-[58px] left-0 h-[calc(100vh-58px)]">
        <Sidebar className="w-64 border-r pt-2 h-full" />
      </div>
      <main className="ml-64 h-[calc(100vh-58px)] overflow-hidden">
        <div className="h-full">
          <ArticleList />
        </div>
      </main>
    </div>
  );
}
