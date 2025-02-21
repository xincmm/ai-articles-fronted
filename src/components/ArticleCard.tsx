import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface ArticleCardProps {
  title: string
  date: string
  readTime: string
  aiScore: number
  tags: string[]
  imageUrl: string
  description: string
}

export function ArticleCard({
  title,
  date,
  readTime,
  aiScore,
  tags,
  imageUrl,
  description,
}: ArticleCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex gap-4 p-6">
          <div className="relative h-48 w-48 flex-shrink-0 overflow-hidden rounded-lg">
            <img
              src={imageUrl}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
              <span>机器之心</span>
              <span>{date}</span>
              <span>{readTime}</span>
              <div className="flex items-center gap-1">
                <span>AI 评分: {aiScore}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < Math.floor(aiScore / 20) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-4 line-clamp-2 text-sm text-muted-foreground">
              {description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 