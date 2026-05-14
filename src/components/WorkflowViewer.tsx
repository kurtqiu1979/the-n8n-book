import { useMemo } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  type Node,
  type Edge,
  type NodeTypes,
  Handle,
  Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

/* ============================================================
   WorkflowViewer · 只读 n8n workflow 渲染器
   接收 n8n 导出格式的 workflow JSON，渲染节点和连线
   - 可平移、缩放、点击节点查看说明
   - 不可编辑、不可运行
   ============================================================ */

/** n8n workflow 导出格式中的 node 子集 */
interface N8nNode {
  id?: string;
  name: string;
  type: string;
  position: [number, number];
  parameters?: Record<string, unknown>;
}

/** n8n workflow 导出格式中的 connections 结构 */
type N8nConnections = Record<
  string,
  {
    main?: Array<Array<{ node: string; type?: string; index?: number }>>;
  }
>;

interface N8nWorkflow {
  name?: string;
  nodes: N8nNode[];
  connections: N8nConnections;
}

interface Props {
  workflow: N8nWorkflow;
  height?: number;
}

/** ---------- 自绘节点 · 模拟 n8n 节点外观 ---------- */
function N8nStyleNode({ data }: { data: { label: string; type: string } }) {
  return (
    <div
      style={{
        background: '#22272E',
        color: '#F0F0F0',
        border: '2px solid #FF6D5A',
        borderRadius: 8,
        padding: '10px 14px',
        minWidth: 140,
        boxShadow: '0 2px 12px rgba(255, 109, 90, 0.25)',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#FF6D5A', width: 8, height: 8 }}
      />
      <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 3 }}>{data.label}</div>
      <div style={{ fontSize: 10, opacity: 0.65 }}>{shortType(data.type)}</div>
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: '#FF6D5A', width: 8, height: 8 }}
      />
    </div>
  );
}

const nodeTypes: NodeTypes = {
  n8nStyle: N8nStyleNode,
};

/** n8n-nodes-base.httpRequest → httpRequest */
function shortType(t: string): string {
  const parts = t.split('.');
  return parts[parts.length - 1] || t;
}

/** 把 n8n workflow JSON 转换成 React Flow 的 nodes + edges */
function n8nToReactFlow(workflow: N8nWorkflow): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = workflow.nodes.map((n, idx) => ({
    id: n.name,
    type: 'n8nStyle',
    position: { x: n.position[0] - 600, y: n.position[1] - 300 },
    data: { label: n.name, type: n.type },
  }));

  const edges: Edge[] = [];
  Object.entries(workflow.connections || {}).forEach(([sourceName, conn]) => {
    (conn.main || []).forEach((arr, sourceIdx) => {
      (arr || []).forEach((c, edgeIdx) => {
        edges.push({
          id: `${sourceName}-${c.node}-${sourceIdx}-${edgeIdx}`,
          source: sourceName,
          target: c.node,
          type: 'smoothstep',
          animated: false,
          style: { stroke: '#FF6D5A', strokeWidth: 2 },
        });
      });
    });
  });

  return { nodes, edges };
}

/** ---------- 主组件 ---------- */
export default function WorkflowViewer({ workflow, height = 360 }: Props) {
  const { nodes, edges } = useMemo(() => n8nToReactFlow(workflow), [workflow]);

  return (
    <div
      className="workflow-viewer"
      style={{
        height,
        width: '100%',
        background: '#0D1117',
        borderRadius: 4,
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#30363D" gap={16} />
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  );
}
