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
import { Label, InputText } from "./flow-nodes";

// Define node types
const nodeTypesDefault: NodeTypes = {
  // TODO add more types
  label: Label,
  editable: InputText,
};

const proOptions = { hideAttribution: true };

type FlowProps = {
  background?: BackgroundVariant;
  defaultEdgeOptions?: DefaultEdgeOptions;
  draggable?: boolean;
  fitView?: boolean;
  fitViewOptions?: FitViewOptions;
  height?: number;
  initialNodes: Node[];
  initialEdges: Edge[];
  nodeTypes?: NodeTypes;
  showControls?: boolean;
  showMiniMap?: boolean;
  width?: number;
  zoom?: boolean;
};

export const Flow: React.FC<FlowProps> = ({
  background,
  height = 300,
  initialEdges,
  initialNodes,
  nodeTypes = nodeTypesDefault,
  fitViewOptions,
  defaultEdgeOptions,
  fitView,
  showControls,
  showMiniMap,
  zoom = true,
  draggable = true,
  width = 800,
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
    <div style={{ width, height }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView={fitView}
        fitViewOptions={fitViewOptions}
        defaultEdgeOptions={defaultEdgeOptions}
        nodeTypes={nodeTypes}
        zoomOnScroll={zoom}
        zoomOnDoubleClick={zoom}
        zoomOnPinch={zoom}
        proOptions={proOptions} // See pricing before using this option
        panOnDrag={draggable}
        draggable={draggable}
        nodesDraggable={draggable}
        style={{ border: "1px solid #ddd" }}
      >
        {showControls && <Controls />}
        {showMiniMap && <MiniMap />}
        {background && <Background variant={background} gap={12} size={1} />}
      </ReactFlow>
    </div>
  );
};
