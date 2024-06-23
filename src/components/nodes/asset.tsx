import { Handle, NodeProps, Position } from "reactflow";
import { AssetType } from "../../types";
import { NodeElement } from "./node";

export const Asset = ({ data }: NodeProps<AssetType>) => (
  <NodeElement type="Asset">
    <Handle
      type="source"
      position={Position.Right}
      style={{ background: "#555", width: "10px", height: "10px" }}
    />
    <p>{data.name}</p>
    <p>{data.description}</p>
  </NodeElement>
);
