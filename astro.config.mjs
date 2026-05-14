// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

/**
 * 部署路径处理：
 *   - 自定义域名 (n8nworker.xyz) → 根路径 `/`，不需要 base
 *   - GitHub Pages 子路径 (kurtqiu1979.github.io/the-n8n-book/) → base 必须 = /the-n8n-book
 * 通过 SITE_BASE 环境变量切换，避免硬编码。
 */
const rawBase = process.env.SITE_BASE || '/';
const BASE = rawBase.endsWith('/') ? rawBase : rawBase + '/';

// https://astro.build/config
export default defineConfig({
  site: 'https://n8nworker.xyz',
  base: BASE,
  integrations: [
    starlight({
      title: 'The n8n Book',
      description: '从零基础到独立设计复杂工作流 · A bilingual n8n textbook from zero to mastery',
      defaultLocale: 'root',
      locales: {
        root: { label: '中文', lang: 'zh-CN' },
        en: { label: 'English', lang: 'en' },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/kurtqiu1979/the-n8n-book',
        },
      ],
      customCss: [
        './src/styles/tokens.css',
        './src/styles/editorial.css',
        './src/styles/terminal.css',
        '@fontsource/noto-serif-sc/400.css',
        '@fontsource/noto-serif-sc/700.css',
        '@fontsource/lora/400.css',
        '@fontsource/lora/700.css',
        '@fontsource/inter/400.css',
        '@fontsource/inter/600.css',
        '@fontsource/jetbrains-mono/400.css',
        '@fontsource/jetbrains-mono/700.css',
      ],
      sidebar: [
        {
          label: '第 0 部分 · 欢迎',
          translations: { en: 'Part 0 · Welcome' },
          items: [{ autogenerate: { directory: '00-welcome' } }],
        },
        {
          label: '第 1 部分 · 入门基石',
          translations: { en: 'Part 1 · Foundations' },
          collapsed: true,
          items: [{ autogenerate: { directory: '01-foundations' } }],
        },
        {
          label: '第 2 部分 · 触发器与节点',
          translations: { en: 'Part 2 · Triggers & Nodes' },
          collapsed: true,
          items: [{ autogenerate: { directory: '02-nodes' } }],
        },
        {
          label: '第 3 部分 · 表达式与数据',
          translations: { en: 'Part 3 · Expressions & Data' },
          collapsed: true,
          items: [{ autogenerate: { directory: '03-expressions' } }],
        },
        {
          label: '第 4 部分 · 流程控制',
          translations: { en: 'Part 4 · Flow Logic' },
          collapsed: true,
          items: [{ autogenerate: { directory: '04-flow-logic' } }],
        },
        {
          label: '第 5 部分 · AI 与 Agent',
          translations: { en: 'Part 5 · AI & Agents' },
          collapsed: true,
          items: [{ autogenerate: { directory: '05-ai-agents' } }],
        },
        {
          label: '第 6 部分 · 实战案例集',
          translations: { en: 'Part 6 · Case Library' },
          collapsed: true,
          items: [{ autogenerate: { directory: '06-case-library' } }],
        },
        {
          label: '第 7 部分 · 学习者工具箱',
          translations: { en: 'Part 7 · Reference' },
          collapsed: true,
          items: [{ autogenerate: { directory: '07-reference' } }],
        },
      ],
      lastUpdated: true,
      pagination: true,
    }),
    react(),
  ],
});
