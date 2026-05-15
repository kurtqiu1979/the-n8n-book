# The n8n Book · 《n8n 之书》

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build) [![Deploy](https://github.com/kurtqiu1979/the-n8n-book/actions/workflows/deploy.yml/badge.svg)](https://github.com/kurtqiu1979/the-n8n-book/actions/workflows/deploy.yml)

> **一份中英双语的 n8n 教材 · A bilingual n8n textbook from zero to mastery**  
> 🌐 [n8nworker.xyz](https://n8nworker.xyz)

---

## 关于本书 · About

写给**零基础自动化爱好者**的 n8n 学习教材。从安装到设计复杂工作流（含 AI Agent / RAG / 错误处理），配 24 个真实案例。

A textbook for **non-developer automation enthusiasts**. From install to designing complex workflows (including AI Agent / RAG / error handling), with 24 real-world cases.

## 大纲 · Outline

- **第 0 部分 · 欢迎** — 阅读地图、与 Zapier/Make 差异
- **第 1 部分 · 入门基石** (5 节) — 安装 / 编辑器 / 第一个 Workflow / Item 心智模型 / Execution 机制
- **第 2 部分 · 触发器与节点** (6 节) — 触发器 / HTTP Request / Set / 应用节点 / Credentials / AI Agent 初识
- **第 3 部分 · 表达式与数据** (5 节) — `{{ }}` 语法 / `$json` / JS 速查 / 类型与日期 / 新手 5 坑
- **第 4 部分 · 流程控制** (6 节) — IF/Switch / Merge / SplitInBatches / 循环 / 错误处理 / Sub-workflow
- **第 5 部分 · AI 与 Agent** (6 节) — LangChain / AI Agent / Memory / Vector Store / RAG 实战 / Chat Trigger
- **第 6 部分 · 实战案例集** — **24 个完整案例** 分 8 主题 (AI / 内容 / 电商 / 生产力 / 数据 / 营销 / DevOps / 趣味)
- **第 7 部分 · 学习者工具箱** — 节点速查 / 表达式速查 / 中英术语对照 / 调试指南 / 资源导航

## 特点 · Features

- 📚 **30+ 节体系化课程** · *Structured curriculum*
- 🛠 **24 个实战案例** · 节点连线可视化 + 一键复制 JSON · *visualized + copy-to-clipboard JSON*
- 🌐 **中英双语 i18n** · 中文默认 / English at `/en/`
- 🎨 **编辑部 + 笔记本** 双气质视觉 · *Editorial-magazine base + terminal-notebook cells*
- 🔍 **Cmd+K** 全文搜索（Starlight Pagefind）

## 技术栈 · Tech Stack

- [Astro 6](https://astro.build/) + [Starlight 0.39](https://starlight.astro.build/)
- [React Flow](https://reactflow.dev/) for read-only workflow visualization
- MDX content + self-hosted fonts (Lora / Noto Serif SC / Inter / JetBrains Mono)
- GitHub Actions → GitHub Pages

## 本地开发 · Local Development

```bash
pnpm install
pnpm dev               # http://localhost:4321
pnpm build && pnpm preview
```

## 部署 · Deployment

推送到 `main` 分支会自动触发 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)，构建并发布到 GitHub Pages。  
Pushes to `main` trigger automatic build & deploy to GitHub Pages.

## 贡献 · Contributing

发现错漏 / 想加案例 / 翻译改进 — 欢迎 Issue & PR。  
Spotted an error, want to contribute a case, or improve translations — issues & PRs welcome.

## 许可 · License

- **内容 (Content)**: [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- **代码 (Code)**: [MIT](./LICENSE)
