import { FilterBar } from "./FilterBar"
import { ArticleCard } from "./ArticleCard"

export function ArticleList() {
  return (
    <div className="h-full p-8">
      <FilterBar />
      <div className="mt-6 space-y-4">
        <ArticleCard
          title="20 万张 GPU! 马斯克揭出「地表最强」大模型 Grok-3, 排行榜登顶，复仇 OpenAI"
          date="02-18"
          readTime="9 分钟"
          aiScore={93}
          tags={["人工智能", "大语言模型", "Grok-3", "xAI"]}
          imageUrl="/article1.jpg"
          description="文章报道了马斯克旗下 xAI 公司最新发布的旗舰大模型 Grok-3。Grok-3 系列包含轻量版 Grok 3 mini, 强调快速响应。Grok-3 在 Math、Science 和 Coding 等多项基准测试中，大幅超越 Gemini-2 Pro、DeepSeek-V3、Claude 3.5 Sonnet 和 GPT-4o 等模型，并在大模型竞技场 Chatbot Arena 中登顶。"
        />
        <ArticleCard
          title="接力 DeepSeek, 阶跃星辰直接开源两款国产多模态大模型"
          date="02-18"
          readTime="15 分钟"
          aiScore={93}
          tags={["人工智能", "多模态大模型", "视频生成", "语音交互"]}
          imageUrl="/article2.jpg"
          description="阶跃星辰联合吉利汽车集团开源了两款多模态大模型: Step-Video-T2V 和 Step-Audio。Step-Video-T2V 是全球范围内参数量最大、性能最好的开源视频生成模型，采用 MIT 许可协议，支持免费商用。"
        />
      </div>
    </div>
  )
} 