import { useState } from "react";
import { Node, Position } from "reactflow";
import { EditFlowForm } from "./edit-flow-form";
import { EditFlowContainer, LabelText } from "./styles";

const nodeData: Node = {
  id: "asset-1-type-1",
  type: "asset",
  position: { x: 20, y: 77.6997 },
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
  style: {
    width: 150,
    height: 130,
  },
  data: {
    label: "Asset - Type 1 Details",
    name: "Asset Name",
  },
};

export const EditFlowPanel = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [node, setNode] = useState<Node>(nodeData);

  return (
    <EditFlowContainer>
      <div>
        <p>Edit Flow Control</p>
      </div>
      <EditFlowForm data={node.data.name} />
      <LabelText>Asset type:</LabelText>
      <div>{node.data.label}</div>
    </EditFlowContainer>
  );
};
