import { Position } from "reactflow";

import "reactflow/dist/style.css";
import ResizeRotateNode from "../../components/flow/nodes/resize-and-rotate";
import { Flow } from "../../components/flow";

const nodeTypes = {
  resizeRotate: ResizeRotateNode,
};

const nodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "Node 1", resizable: true },
    type: "resizeRotate",
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    selected: true,
    style: { width: 180, height: 100 },
  },
  {
    id: "2",
    position: { x: 300, y: 0 },
    data: { label: "Node 2", rotatable: true },
    type: "resizeRotate",
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    style: { width: 180, height: 100 },
  },
];

const edges = [
  {
    id: "1->2",
    source: "1",
    target: "2",
    type: "smoothstep",
  },
];

export const MembersPage = () => {
  return (
    <div>
      <p>Members Page</p>

      <Flow
        nodeTypes={nodeTypes}
        initialNodes={nodes}
        initialEdges={edges}
        height="600px"
        withBorder
      ></Flow>
    </div>
  );
};
