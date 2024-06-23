import { useState, useCallback } from "react";
import ReactFlow, {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  NodeTypes,
  FitViewOptions,
  DefaultEdgeOptions,
  Controls,
  Background,
  BackgroundVariant,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";
import { Label, InputText, Resize } from "./nodes/nodes";
import { Asset } from "../nodes/asset";

// Define the node types
const nodeTypesDefault: NodeTypes = {
  asset: Asset,
  label: Label,
  editable: InputText,
  resize: Resize,
};

// ℹ️ See pricing before enabling this option in prod
const proOptions = { hideAttribution: true };

type FlowProps = {
  background?: BackgroundVariant;
  className?: string;
  defaultEdgeOptions?: DefaultEdgeOptions;
  draggable?: boolean;
  fitView?: boolean;
  fitViewOptions?: FitViewOptions;
  height?: string;
  initialNodes: Node[];
  initialEdges: Edge[];
  nodeTypes?: NodeTypes;
  showControls?: boolean;
  showMiniMap?: boolean;
  style?: React.CSSProperties;
  width?: string;
  withBorder?: boolean;
  zoom?: boolean;
};

export const Flow: React.FC<FlowProps> = ({
  background,
  className,
  draggable = true,
  defaultEdgeOptions,
  fitView = true,
  fitViewOptions,
  height = 300,
  initialEdges,
  initialNodes,
  nodeTypes = nodeTypesDefault,
  showControls,
  showMiniMap,
  style,
  width = 800,
  withBorder,
  zoom = true,
}) => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div
      style={{
        width,
        height,
        border: `${withBorder ? "1px solid #ddd" : "none"}`,
      }}
    >
      <ReactFlow
        className={className}
        defaultEdgeOptions={defaultEdgeOptions}
        draggable={draggable}
        edges={edges}
        fitView={fitView}
        fitViewOptions={fitViewOptions}
        nodes={nodes}
        nodesDraggable={draggable}
        nodeTypes={nodeTypes}
        onConnect={onConnect}
        onEdgesChange={onEdgesChange}
        panOnDrag={draggable}
        onNodesChange={onNodesChange}
        proOptions={proOptions}
        style={style}
        zoomOnDoubleClick={zoom}
        zoomOnPinch={zoom}
        zoomOnScroll={zoom}
      >
        {showControls && <Controls showInteractive />}
        {showMiniMap && <MiniMap />}
        {background && <Background variant={background} gap={10} size={4} />}
      </ReactFlow>
    </div>
  );
};
