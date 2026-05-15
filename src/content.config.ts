import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// 扩展 docs schema：为案例库页加 difficulty / theme / nodes 字段
// 供 CaseFilter 组件按维度筛选使用
export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
				theme: z
					.enum([
						'ai-assistants',
						'content-ops',
						'ecommerce',
						'productivity',
						'data-pipeline',
						'marketing-crm',
						'devops',
						'fun-projects',
					])
					.optional(),
				nodes: z.array(z.string()).optional(),
			}),
		}),
	}),
};
