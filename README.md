# The n8n Book · 《n8n 之书》

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build) [![Deploy](https://github.com/kurtqiu1979/the-n8n-book/actions/workflows/deploy.yml/badge.svg)](https://github.com/kurtqiu1979/the-n8n-book/actions/workflows/deploy.yml)

> **一份中英双语的 n8n 教材 · A bilingual n8n textbook from zero to mastery**  
> 🌐 [n8nworker.xyz](https://n8nworker.xyz)

---

## 关于本书 · About

写给**零基础自动化爱好者**的 n8n 学习教材。从安装到设计复杂工作流（含 AI Agent / RAG / 错误处理），配 24 个真实案例。

A textbook for **non-developer automation enthusiasts**. From install to designing complex workflows (including AI Agent / RAG / error handling), with 24 real-world cases.

- 📚 **7 大部分** · 体系化课程，章节折叠 · *7 parts, structured curriculum*
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
