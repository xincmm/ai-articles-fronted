import { Sidebar } from "./Sidebar";
import { ArticleList } from "./ArticleList";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 left-0 h-screen">
        <Sidebar className="w-64 border-r h-full" />
      </div>
      <main className="ml-64 bg-background min-h-screen">
        <div className="container mx-auto p-4">
          <ArticleList />
        </div>
      </main>
    </div>
  );
}
