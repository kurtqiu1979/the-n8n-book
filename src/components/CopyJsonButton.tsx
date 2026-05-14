import { useState } from 'react';

interface Props {
  /** 要复制的 JSON 对象（会被 JSON.stringify） */
  data: unknown;
  /** 按钮文字 · 默认 "Copy Workflow JSON ↗" */
  label?: string;
  /** 复制成功后短暂展示的文字 · 默认 "Copied ✓" */
  successLabel?: string;
}

/**
 * 一键复制 Workflow JSON 到剪贴板
 * 在 MDX 中通过 `client:load` 指令挂载为 React 岛
 */
export default function CopyJsonButton({
  data,
  label = 'Copy Workflow JSON ↗',
  successLabel = 'Copied ✓',
}: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      const text = JSON.stringify(data, null, 2);
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (err) {
      console.error('Copy failed', err);
    }
  }

  return (
    <button type="button" className="term-action" onClick={handleCopy}>
      {copied ? successLabel : label}
    </button>
  );
}
