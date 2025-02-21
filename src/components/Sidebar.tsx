import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sources } from "./Sources";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <h2 className="mb-2 px-4 py-2 text-xl font-semibold tracking-tight border-b border-gray-200">
        文章来源
      </h2>
      <ScrollArea className="h-screen px-1">
        <Sources />
      </ScrollArea>
    </div>
  );
}
