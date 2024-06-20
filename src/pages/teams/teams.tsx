import { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, Edge,Node,  Connection, Background, Controls, MiniMap, BackgroundVariant } from 'reactflow';
 
import 'reactflow/dist/style.css';



 
export const TeamsPage = ({ initialNodes, initialEdges }: { initialNodes: Node[] ; initialEdges: Edge[] }) => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div style={{ width: '1200px', height: '800px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Lines} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};
