import { Sidebar } from "./Sidebar";
import { ArticleList } from "./ArticleList";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 left-0 h-screen">
        <Sidebar className="w-64 border-r h-full" />
      </div>
      <main className="ml-64 h-screen overflow-hidden">
        <div className="h-full">
          <ArticleList />
        </div>
      </main>
    </div>
  );
}
