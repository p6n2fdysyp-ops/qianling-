import { useState } from "react";
import { motion } from "motion/react";
import {
  Activity,
  ArrowUpRight,
  BadgeCheck,
  Bot,
  Boxes,
  Building2,
  ChevronRight,
  Eye,
  Filter,
  Github,
  LayoutDashboard,
  Library,
  Menu,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  WandSparkles,
} from "lucide-react";

const navLinks = [
  { label: "精选库", href: "#discover" },
  { label: "核心能力", href: "#capabilities" },
  { label: "适用场景", href: "#scenarios" },
  { label: "GitHub 榜单", href: "#github" },
  { label: "价格方案", href: "#plans" },
];

const macMenu = ["精选", "智能体", "技能", "雷达", "收录", "文档"];
const siteUrl = "https://qianling-three.vercel.app/";
const repoUrl = "https://github.com/p6n2fdysyp-ops/qianling-";
const snapshotDateLabel = "2026 年 7 月 22 日";

const heroStats = [
  {
    value: "320+",
    label: "已收录工具 / Agent / Repo",
  },
  {
    value: "每周更新",
    label: "持续追踪热度、场景与信号",
  },
  {
    value: "高星优先",
    label: "优先展示高星且可落地项目",
  },
];

const sidebarItems = [
  { icon: LayoutDashboard, label: "全部精选", count: 284, active: true },
  { icon: Sparkles, label: "AIGC 工具", count: 96 },
  { icon: Bot, label: "热门智能体", count: 48 },
  { icon: Github, label: "GitHub 技能", count: 72 },
  { icon: Boxes, label: "Prompt / MCP", count: 33 },
  { icon: Activity, label: "每周雷达", count: 12 },
];

const labels = [
  { name: "图像生成", color: "#00d2ff" },
  { name: "视频生成", color: "#A4F4FD" },
  { name: "代码智能体", color: "#f59e0b" },
  { name: "研究分析", color: "#10b981" },
];

const toolFeed = [
  {
    name: "Dify",
    category: "智能体工作流",
    preview: "面向企业 AI 应用的工作流编排、知识库与多步智能体平台。",
    stars: "149k",
    active: true,
  },
  {
    name: "MarkItDown",
    category: "GitHub 技能",
    preview: "把 Office、PDF 与多格式文件转成适合大模型读取的 Markdown。",
    stars: "166k",
  },
  {
    name: "browser-use",
    category: "浏览器智能体",
    preview: "让 AI 真正操作网页，适合自动化测试、表单流程和抓取任务。",
    stars: "105k",
  },
  {
    name: "ComfyUI",
    category: "AIGC 工作流",
    preview: "节点式扩散工作流平台，适合搭建更复杂的图像生成流水线。",
    stars: "121k",
  },
  {
    name: "OpenHands",
    category: "编码智能体",
    preview: "面向研发场景的 AI 开发代理，适合实现与迭代代码任务。",
    stars: "81k",
  },
  {
    name: "MCP Servers",
    category: "协议与技能",
    preview: "高信号 MCP server 集合，帮助模型连接工具与外部上下文。",
    stars: "88.5k",
  },
];

const signalGroups = [
  {
    title: "值得立刻收藏",
    count: 8,
    color: "#ffffff",
    items: ["MarkItDown — 文档转 Markdown", "Dify — 工作流 + RAG + 智能体"],
  },
  {
    title: "智能体热门方向",
    count: 14,
    color: "#e5e5e5",
    items: ["browser-use — 浏览器自动化", "OpenHands — AI coding 循环"],
  },
  {
    title: "AIGC 工作流",
    count: 11,
    color: "#a3a3a3",
    items: ["ComfyUI — 节点式 pipeline", "Fooocus — 更轻量生成体验"],
  },
  {
    title: "技能 / 协议",
    count: 19,
    color: "#525252",
    items: ["MCP Servers — 协议连接器", "GenAI for Beginners — 学习体系"],
  },
];

const valueCards = [
  {
    icon: Filter,
    title: "减少试错成本",
    description: "不用在碎片化社媒和搜索结果里来回筛，直接看更适合实际落地的项目。",
  },
  {
    icon: Eye,
    title: "看清真实信号",
    description: "不只展示 stars，还强调适合场景、交付可能性、文档质量与社区活跃度。",
  },
  {
    icon: Library,
    title: "统一沉淀知识",
    description: "把团队评估过的工具、智能体与技能收成自己的长期 AI 资产库。",
  },
  {
    icon: ShieldCheck,
    title: "更适合商业决策",
    description: "面向采购、选型、试点和内部推广，不只是“逛榜单”，而是帮助做决策。",
  },
];

const ecosystemNames = [
  "OpenAI",
  "Anthropic",
  "GitHub",
  "Hugging Face",
  "LangChain",
  "MCP",
  "ComfyUI",
  "Dify",
];

const scenarioCards = [
  {
    icon: Rocket,
    title: "创业团队",
    description: "快速找出能直接用于 MVP、客服助手、知识库和内部 Copilot 的项目组合。",
  },
  {
    icon: Building2,
    title: "产品与运营团队",
    description: "更快理解哪些 AI 工具适合内容、投放、分析、自动化与增长场景。",
  },
  {
    icon: Users,
    title: "AI 从业者 / 顾问",
    description: "建立自己的高质量工具库、案例库和 GitHub 技能推荐体系，方便对外服务。",
  },
];

const faqItems = [
  {
    question: "Aura Atlas 收录什么内容？",
    answer:
      "平台主要收录三类内容：AIGC 工具、热门智能体，以及 GitHub 上高星且有实际使用价值的技能仓库。我们更关注能否真正用于产品、业务或工作流，而不只是单纯热度。",
  },
  {
    question: "项目是按什么标准进入精选库的？",
    answer:
      "会综合看 GitHub Stars、更新频率、文档完整度、场景清晰度、可落地性和社区反馈。目标是帮助中文用户更快判断“是否值得花时间深入了解”。",
  },
  {
    question: "如果我想提交一个工具或仓库怎么办？",
    answer:
      "你可以通过 GitHub 仓库的 Issues 提交收录建议，也可以后续扩展成表单提报。建议附上项目链接、适用场景、核心亮点和同类替代项，方便后续归档。",
  },
  {
    question: "这个站后面还能扩展成真正的平台吗？",
    answer:
      "可以。当前首页已经具备官网基础，后续可以继续接登录、收藏、详情页、动态 GitHub 数据、后台审核和自定义域名，逐步演进成完整产品。",
  },
];

const platformTracks = [
  {
    id: "aigc",
    title: "AIGC 工具库",
    eyebrow: "图像 / 视频 / 工作流",
    description:
      "给创作者、设计师和产品团队的生成式工具清单，不只看功能，还看扩展性与复用效率。",
    items: [
      {
        name: "Stable Diffusion WebUI",
        stars: "164k",
        note: "成熟的 Stable Diffusion Web 界面与插件生态，适合快速接入生成式创作。",
        url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
      },
      {
        name: "ComfyUI",
        stars: "121k",
        note: "节点式扩散工作流，适合搭建复杂图像生成、批处理和可复用 pipeline。",
        url: "https://github.com/Comfy-Org/ComfyUI",
      },
      {
        name: "Fooocus",
        stars: "51.1k",
        note: "更偏向结果导向的生成体验，适合想降低操作复杂度的用户。",
        url: "https://github.com/lllyasviel/Fooocus",
      },
    ],
  },
  {
    id: "agents",
    title: "流行智能体库",
    eyebrow: "浏览器 / 编码 / 工作流",
    description:
      "从浏览器自动化到 AI coding，再到企业级工作流智能体，这里收录真正有热度和使用反馈的项目。",
    items: [
      {
        name: "Dify",
        stars: "149k",
        note: "可视化编排 Prompt 应用、RAG 与多步智能体工作流，适合企业级 AI 入口。",
        url: "https://github.com/langgenius/dify",
      },
      {
        name: "browser-use",
        stars: "105k",
        note: "让 AI 真正操作网页，适合自动化流程、表单填写、QA 与网页执行场景。",
        url: "https://github.com/browser-use/browser-use",
      },
      {
        name: "OpenHands",
        stars: "81k",
        note: "AI-driven development，适合把编码实现和迭代任务交给代理执行。",
        url: "https://github.com/OpenHands/OpenHands",
      },
      {
        name: "crewAI",
        stars: "55.6k",
        note: "多角色协作式 agent 编排框架，适合复杂任务拆解与团队式智能体流程。",
        url: "https://github.com/crewAIInc/crewAI",
      },
    ],
  },
  {
    id: "skills",
    title: "GitHub Skills 榜单",
    eyebrow: "文档 / MCP / 学习体系",
    description:
      "不只是仓库集合，而是面向实战可复用的 skills：文档转换、协议连接器、课程库与基础能力组件。",
    items: [
      {
        name: "MarkItDown",
        stars: "166k",
        note: "把 Office、PDF 和多种文件转成 LLM 友好的 Markdown，是非常实用的基础 skill。",
        url: "https://github.com/microsoft/markitdown",
      },
      {
        name: "Generative AI for Beginners",
        stars: "113k",
        note: "结构化课程仓库，适合团队统一基础认知、内部培训与 AI 入门体系建设。",
        url: "https://github.com/microsoft/generative-ai-for-beginners",
      },
      {
        name: "MCP Servers",
        stars: "88.5k",
        note: "高星协议服务器集合，帮助模型连接上下文、工具与企业内部系统。",
        url: "https://github.com/modelcontextprotocol/servers",
      },
    ],
  },
];

const plans = [
  {
    tier: "探索版",
    monthly: "¥0",
    yearly: "¥0",
    description: "适合先浏览趋势、收藏少量工具并观察 AI 生态变化的个人用户。",
    features: [
      "浏览 AIGC / 智能体 / GitHub 技能精选榜",
      "收藏最多 20 个工具或仓库",
      "每周趋势雷达摘要",
      "基础标签与场景筛选",
      "公开集合访问权限",
    ],
  },
  {
    tier: "专业版",
    monthly: "¥59/月",
    yearly: "¥590/年",
    description: "适合高频试用新工具、搭建个人 AI 栈和持续跟踪 GitHub 信号的进阶用户。",
    features: [
      "无限收藏与个人工具栈管理",
      "GitHub Stars / Forks / Topics 高级筛选",
      "自定义 watchlist 与更新提醒",
      "Aura AI 推荐相似工具与替代方案",
      "导出团队采购与评估清单",
    ],
  },
  {
    tier: "团队版",
    monthly: "¥299/月",
    yearly: "¥2,990/年",
    description: "面向团队协作与企业内 AI 选型，统一沉淀工具、智能体与技能资源库。",
    features: [
      "团队私有收藏夹与角色权限",
      "共享评估标准与内部评分体系",
      "飞书 / Slack 每周雷达推送",
      "智能体工作流模板与提交审核",
      "采购决策板与内部知识沉淀",
    ],
    pro: true,
  },
];

const gradientStyle = {
  backgroundImage:
    "linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)",
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text" as const,
  backgroundClip: "text" as const,
  color: "transparent",
  WebkitTextFillColor: "transparent",
  filter: "url(#c3-noise)",
};

type PrimaryButtonProps = {
  href: string;
  label: string;
  full?: boolean;
};

function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" fill="currentColor" className={className} aria-hidden="true">
      <path d="M 0 128 C 70.692 128 128 185.308 128 256 L 64 256 C 64 220.654 35.346 192 0 192 Z M 256 192 C 220.654 192 192 220.654 192 256 L 128 256 C 128 185.308 185.308 128 256 128 Z M 128 0 C 128 70.692 70.692 128 0 128 L 0 64 C 35.346 64 64 35.346 64 0 Z M 192 0 C 192 35.346 220.654 64 256 64 L 256 128 C 185.308 128 128 70.692 128 0 Z" />
    </svg>
  );
}

function PrimaryButton({ href, label, full = false }: PrimaryButtonProps) {
  return (
    <a
      href={href}
      className={[
        "group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all hover:bg-white/90 active:scale-[0.98]",
        full ? "w-full" : "",
      ].join(" ")}
    >
      <Sparkles className="h-4 w-4" />
      <span>{label}</span>
      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-px" />
    </a>
  );
}

function SectionEyebrow({ label, tag }: { label: string; tag?: string }) {
  return (
    <div className="inline-flex items-center gap-3 text-sm text-white/65">
      <span className="h-1.5 w-1.5 rounded-full bg-white" />
      <span>{label}</span>
      {tag ? (
        <span className="rounded-full border border-white/10 px-2 py-0.5 text-white/50">
          {tag}
        </span>
      ) : null}
    </div>
  );
}

function CheckIcon() {
  return (
    <span className="c3-check">
      <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5">
        <path
          d="M5 10.5l3.2 3.2L15 7"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function StarPill({ value }: { value: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/62">
      <Star className="h-3 w-3 fill-current" />
      {value}
    </span>
  );
}

export default function App() {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white">
      <svg className="pointer-events-none absolute h-0 w-0">
        <filter id="c3-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0"
          />
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
        </filter>
      </svg>

      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none h-full w-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4"
        />
        <div className="absolute inset-0 bg-[#0c0c0c]/58" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(61,129,227,0.18),transparent_40%),linear-gradient(to_bottom,rgba(12,12,12,0.3),rgba(12,12,12,0.92))]" />
      </div>

      <div className="fixed inset-y-0 left-1/2 z-[5] hidden w-px -translate-x-[calc(50%+36rem)] bg-white/10 pointer-events-none md:block" />
      <div className="fixed inset-y-0 left-1/2 z-[5] hidden w-px translate-x-[calc(-50%+36rem)] bg-white/10 pointer-events-none md:block" />

      <div className="relative z-10">
        <motion.nav
          className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center text-white">
            <LogoMark />
          </div>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.45 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:block">
            <PrimaryButton href="#discover" label="立即浏览精选库" />
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </motion.nav>

        <section className="flex flex-col items-center px-6 pb-16 pt-16 text-center md:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.65 }}
          >
            <SectionEyebrow label="中文 AI 工具导航平台" tag="AIGC + 智能体 + GitHub 技能" />
          </motion.div>

          <motion.h1
            className="mt-6 max-w-5xl text-4xl font-semibold tracking-tight leading-[0.9] md:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block">帮你找到真正值得投入的</span>
            <span className="animate-shiny block" style={gradientStyle}>
              AI 工具、智能体与技能库
            </span>
          </motion.h1>

          <motion.p
            className="mt-8 max-w-3xl text-base leading-[1.7] text-white/60 md:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Aura Atlas 是一个面向中文用户的 AI 工具与智能体发现平台。它把 AIGC 工具、热门
            智能体，以及 GitHub 上高星且真正有实用价值的技能仓库收成一个统一入口，
            帮你更快做选型、收藏、比较和内部沉淀。
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <PrimaryButton href="#discover" label="进入精选库" />
            <a
              href="#github"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white/72 transition-all hover:bg-white/[0.08]"
            >
              <Github className="h-4 w-4" />
              查看 GitHub 高星榜
            </a>
          </motion.div>

          <motion.p
            className="mt-4 text-xs text-white/40"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
          >
            GitHub 热度快照更新于 {snapshotDateLabel}
          </motion.p>

          <motion.div
            className="mt-10 grid w-full max-w-[68rem] gap-3 md:grid-cols-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
          >
            {heroStats.map((item, index) => (
              <motion.article
                key={item.label}
                className="relative overflow-hidden rounded-[30px] border border-white/18 bg-black/30 px-8 py-9 text-left shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur-[2px]"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-[30px] border border-white/[0.03]" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
                <div className="relative">
                  <p className="text-[2.25rem] font-semibold tracking-tight text-white md:text-[2.5rem]">
                    {item.value}
                  </p>
                  <p className="mt-5 text-[1.05rem] leading-8 text-white/60">{item.label}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <motion.div
          className="h-10 border-y border-white/10 bg-black/40 backdrop-blur-md"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.65 }}
        >
          <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 text-xs">
            <div className="flex items-center gap-8">
              <span className="font-semibold text-white">Aura Atlas</span>
              <div className="flex items-center gap-4 text-white/65">
                {macMenu.map((item, index) => (
                  <span
                    key={item}
                    className={[
                      index > 3 ? "hidden md:inline" : "",
                      index > 2 ? "hidden sm:inline" : "",
                    ].join(" ")}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-white/65">
              <Search className="h-3.5 w-3.5" />
              <span>{snapshotDateLabel} · 热度信号已同步</span>
            </div>
          </div>
        </motion.div>

        <section id="discover" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0e1014]/90 shadow-[0_25px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs text-white/50">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <span>Aura Atlas · AI 发现控制台</span>
              <div className="w-12" />
            </div>

            <div className="grid h-auto grid-cols-1 md:h-[560px] md:grid-cols-12">
              <aside className="col-span-3 border-b border-white/10 bg-black/30 p-4 md:border-b-0 md:border-r">
                <a
                  href="#github"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-black"
                >
                  <WandSparkles className="h-4 w-4" />
                  申请项目收录
                </a>

                <div className="mt-5 space-y-1.5">
                  {sidebarItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <button
                        key={item.label}
                        type="button"
                        className={[
                          "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                          item.active
                            ? "bg-white/10 text-white"
                            : "text-white/60 hover:bg-white/5",
                        ].join(" ")}
                      >
                        <span className="flex items-center gap-2">
                          <Icon className="h-4 w-4" />
                          {item.label}
                        </span>
                        <span className="text-xs">{item.count}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-white/35">标签分类</p>
                  <div className="mt-3 space-y-2">
                    {labels.map((label) => (
                      <div key={label.name} className="flex items-center gap-2 text-sm text-white/60">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: label.color }} />
                        {label.name}
                      </div>
                    ))}
                  </div>
                </div>
              </aside>

              <div className="col-span-4 border-b border-white/10 md:border-b-0 md:border-r">
                <div className="border-b border-white/10 px-4 py-3">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/40">
                    <Search className="h-4 w-4" />
                    <span>搜索工具、智能体、GitHub 仓库</span>
                  </div>
                </div>

                <div className="divide-y divide-white/10">
                  {toolFeed.map((item) => (
                    <div
                      key={item.name}
                      className={[
                        "cursor-default px-4 py-4 transition-colors",
                        item.active ? "bg-white/[0.05]" : "hover:bg-white/[0.03]",
                      ].join(" ")}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="truncate text-sm font-medium text-white">{item.name}</p>
                            <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-white/45">
                              {item.category}
                            </span>
                          </div>
                          <p className="mt-2 text-xs leading-5 text-white/55">{item.preview}</p>
                        </div>
                        <StarPill value={item.stars} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-5 flex min-h-[420px] flex-col">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-white/50">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-white/62">
                      本周重点
                    </span>
                    <StarPill value="149k" />
                  </div>
                  <a
                    href="https://github.com/langgenius/dify"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-7 w-7 items-center justify-center rounded-md transition-colors hover:bg-white/5"
                    aria-label="Open repository"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="flex-1 px-5 py-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-white">Dify</h3>
                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#00d2ff] to-[#0B2551] text-xs font-semibold text-white">
                          D
                        </div>
                        <div className="text-sm">
                          <p className="font-medium text-white">langgenius/dify</p>
                          <p className="text-white/45">智能体工作流 · RAG · Prompt 应用</p>
                        </div>
                        <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] text-white/60">
                          企业级热门项目
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-[#A4F4FD]/20 bg-white/[0.03] p-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-[#A4F4FD]">
                      <Sparkles className="h-4 w-4" />
                      Aura 评估摘要
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/70">
                      适合希望把 Prompt 应用、知识库、工作流与 Agent 一体化管理的团队。它把实验、
                      交付与运营观测放到同一个产品层里，非常适合作为企业 AI 应用入口的首批候选。
                    </p>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-white/35">适合场景</p>
                      <p className="mt-2 text-sm leading-6 text-white/72">RAG、客服助手、内部 Copilot</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-white/35">社区信号</p>
                      <p className="mt-2 text-sm leading-6 text-white/72">149k stars，构建者采用度高</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-white/35">产品模式</p>
                      <p className="mt-2 text-sm leading-6 text-white/72">可视化编排 + 发布运营面板</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4 text-sm leading-7 text-white/72">
                    <p>如果你想做一个真正可运营的 AI 平台，Dify 往往会是最值得先评估的项目之一。</p>
                    <p>它的优势不只是“能搭 Agent”，而是同时覆盖 prompt 编排、知识库、工具调用与发布面板。</p>
                    <p>对于做内部助手、业务 AI 应用或 AI 产品 MVP 的团队来说，它的落地速度非常高。</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["工作流", "RAG", "智能体", "Prompt 应用", "可观测性"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/55"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="capabilities" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7 }}
            >
              <SectionEyebrow label="平台核心能力" tag="更像商业站，而不只是榜单站" />
              <h2 className="mt-5 text-3xl font-semibold tracking-tight leading-[1.02] md:text-5xl">
                从热度到可用性
                <br />
                一次筛出真正值得投入的项目
              </h2>
              <p className="mt-6 max-w-md text-base leading-[1.6] text-white/60">
                Aura Atlas 不只看 GitHub Stars。我们把社区热度、文档完整度、场景匹配度、交付可能性
                和中文理解一起放进一个更适合产品决策的视图里，让你更快分辨“看起来很火”和“真的能用”。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["热度榜单", "场景标签", "替代关系", "内部收藏", "团队评估"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="liquid-glass rounded-2xl p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-white">今日信号看板 · 52 个项目已完成分层</p>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[11px] text-white/45">
                  快照 · {snapshotDateLabel}
                </span>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {signalGroups.map((group) => (
                  <div key={group.title} className="liquid-glass rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ backgroundColor: group.color }}
                        />
                        <p className="text-sm font-medium text-white">{group.title}</p>
                      </div>
                      <span className="text-xs text-white/45">({group.count})</span>
                    </div>
                    <div className="mt-3 space-y-2">
                      {group.items.map((item) => (
                        <p key={item} className="text-sm leading-6 text-white/62">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-8">
          <div className="grid gap-4 md:grid-cols-4">
            {valueCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.title}
                  className="liquid-glass rounded-2xl p-5"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                    <Icon className="h-4 w-4 text-white/80" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">{card.description}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="text-center text-xs uppercase tracking-[0.35em] text-white/40">
            正在追踪这些生态里真正被反复提到的工具与项目
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
            {ecosystemNames.map((name, index) => (
              <motion.div
                key={name}
                className="text-center text-sm font-semibold tracking-tight text-white/50 transition-colors hover:text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {name}
              </motion.div>
            ))}
          </div>
        </section>

        <section id="scenarios" className="mx-auto max-w-6xl border-t border-white/10 px-6 py-20 md:py-28">
          <div className="mb-10">
            <SectionEyebrow label="适用人群与场景" tag="中文团队更关心能不能马上用" />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight leading-[1.05] md:text-5xl">
              不只是给 AI 爱好者看
              <br />
              更是给真正要做事情的人用
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {scenarioCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.title}
                  className="liquid-glass rounded-2xl p-6"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-white/80" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight">{card.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/60">{card.description}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section
          id="github"
          className="mx-auto max-w-6xl border-t border-white/10 px-6 py-20 md:py-28"
        >
          <div className="mb-10">
            <SectionEyebrow label="三大核心内容库" tag="AIGC / 智能体 / GitHub 技能" />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight leading-[1.05] md:text-5xl">
              把 AI 工具、热门智能体和 GitHub 高星技能
              <br />
              收成一个真正可逛、可比、可沉淀的平台
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {platformTracks.map((track, index) => (
              <motion.article
                key={track.id}
                id={track.id === "skills" ? "skills" : track.id}
                className="liquid-glass rounded-2xl p-6"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <p className="text-xs uppercase tracking-[0.25em] text-white/38">{track.eyebrow}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{track.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/62">{track.description}</p>

                <div className="mt-6 space-y-3">
                  {track.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-white/20 hover:bg-white/[0.05]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-medium text-white">{item.name}</p>
                        <StarPill value={item.stars} />
                      </div>
                      <p className="mt-2 text-sm leading-6 text-white/55">{item.note}</p>
                    </a>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="liquid-glass rounded-[32px] px-6 py-8 md:flex md:items-center md:justify-between md:px-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/62">
                <BadgeCheck className="h-3.5 w-3.5" />
                平台方向建议
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                如果你准备把它做成正式产品，这一版已经具备“官网化”的基础骨架
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/58 md:text-base">
                接下来可以继续接上登录、收藏、提交收录、详情页、GitHub API 动态数据和后台管理，
                它就会从一个 landing page 变成一个真正的平台产品首页。
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 md:mt-0 md:items-end">
              <PrimaryButton href="#plans" label="查看团队方案" />
              <a
                href="#discover"
                className="text-sm text-white/55 transition-colors hover:text-white"
              >
                继续浏览精选内容
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl border-t border-white/10 px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[1fr_1.1fr]">
            <div>
              <SectionEyebrow label="常见问题" tag="FAQ + 提交入口" />
              <h2 className="mt-5 text-3xl font-semibold tracking-tight leading-[1.05] md:text-5xl">
                让第一次访问的人
                <br />
                也知道这个站能拿来做什么
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/58 md:text-base">
                如果你准备把站点正式发给同事、客户或合作伙伴，这一块能明显降低理解成本。
                它直接解释平台收录内容、精选逻辑、提交方式和后续产品演进方向。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`${repoUrl}/issues`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/72 transition-all hover:bg-white/[0.08]"
                >
                  <Github className="h-4 w-4" />
                  提交收录建议
                </a>
                <a
                  href={siteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/72 transition-all hover:bg-white/[0.08]"
                >
                  <ArrowUpRight className="h-4 w-4" />
                  查看线上站点
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.article
                  key={item.question}
                  className="liquid-glass rounded-2xl p-5"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <h3 className="text-lg font-semibold tracking-tight text-white">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/58">{item.answer}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="plans" className="c3-pricing-section">
          <svg className="pointer-events-none absolute h-0 w-0">
            <filter id="c3-noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.5"
                numOctaves="2"
                stitchTiles="stitch"
              />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.075" />
              </feComponentTransfer>
              <feComposite in2="SourceGraphic" operator="in" result="noise" />
              <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
            </filter>
          </svg>

          <div className="c3-watermark-container">
            <div className="c3-watermark-main">
              <span className="c3-watermark-line-1">你的 AI 工具栈</span>
              <span className="c3-watermark-line-2">一站看清</span>
            </div>
          </div>

          <div className="c3-toggle-wrap">
            <span className="text-sm text-white/60">年付</span>
            <button
              type="button"
              className={`c3-toggle ${yearly ? "active" : ""}`}
              onClick={() => setYearly((value) => !value)}
              aria-pressed={yearly}
              aria-label="Toggle yearly pricing"
            >
              <span className="c3-toggle-knob" />
            </button>
          </div>

          <div className="c3-grid">
            {plans.map((plan) => (
              <article key={plan.tier} className={`c3-card ${plan.pro ? "c3-card-pro" : ""}`}>
                <div className="c3-tier-small">{plan.tier}</div>
                <div className="c3-tier-large">{yearly ? plan.yearly : plan.monthly}</div>
                <p className="c3-desc">{plan.description}</p>
                <ul className="c3-list">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button type="button" className="c3-btn">
                  开始使用
                </button>
              </article>
            ))}
          </div>
        </section>

        <footer className="border-t border-white/10 px-6 py-14">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3 text-white">
                <LogoMark className="h-8 w-8" />
                <span className="text-lg font-semibold tracking-tight">Aura Atlas</span>
              </div>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/58">
                一个面向中文用户的 AI 工具与智能体发现平台，聚合 AIGC 工具、热门智能体与
                GitHub 高星技能，帮助团队更快做选型、收藏、比较与长期沉淀。
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={siteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/72 transition-all hover:bg-white/[0.08]"
                >
                  <ArrowUpRight className="h-4 w-4" />
                  公开访问
                </a>
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/72 transition-all hover:bg-white/[0.08]"
                >
                  <Github className="h-4 w-4" />
                  GitHub 仓库
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">站内导航</p>
              <div className="mt-5 space-y-3 text-sm text-white/55">
                <a href="#discover" className="block transition-colors hover:text-white">
                  精选库
                </a>
                <a href="#capabilities" className="block transition-colors hover:text-white">
                  核心能力
                </a>
                <a href="#scenarios" className="block transition-colors hover:text-white">
                  适用场景
                </a>
                <a href="#github" className="block transition-colors hover:text-white">
                  GitHub 榜单
                </a>
                <a href="#plans" className="block transition-colors hover:text-white">
                  价格方案
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">公开信息</p>
              <div className="mt-5 space-y-3 text-sm text-white/55">
                <a
                  href={`${repoUrl}/issues`}
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-colors hover:text-white"
                >
                  提交收录建议
                </a>
                <a
                  href={`${repoUrl}/commits/main`}
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-colors hover:text-white"
                >
                  查看更新记录
                </a>
                <span className="block">部署平台：Vercel</span>
                <span className="block">当前公开域名：qianling-three.vercel.app</span>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-sm text-white/38">
            <p>© 2026 Aura Atlas. 面向中文用户发现 AI 工具、智能体与 GitHub 技能。</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
