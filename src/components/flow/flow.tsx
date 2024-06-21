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

import { MyCustomNode, TextUpdater } from "./custom-nodes";

const nodeTypesDefault: NodeTypes = {
  // TODO add more types
  custom: MyCustomNode,
  editable: TextUpdater,
};

type Props = {
  initialNodes: Node[];
  initialEdges: Edge[];
  nodeTypes?: NodeTypes;
  fitViewOptions?: FitViewOptions;
  defaultEdgeOptions?: DefaultEdgeOptions;
  fitView?: boolean;
}  

export const Flow: React.FC<Props> = ({
  initialEdges,
  initialNodes,
  nodeTypes = nodeTypesDefault,
  fitViewOptions,
  defaultEdgeOptions,
  fitView,
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
    <div style={{ width: "1200px", height: "800px" }}>
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
      >
         <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Lines} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};
