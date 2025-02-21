import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            文章来源
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start">
                <span className="ml-2">软件编程</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <span className="ml-2">人工智能</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <span className="ml-2">AI Musings by Mu</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <span className="ml-2">AINLP</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <span className="ml-2">AI前线</span>
              </Button>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
} 