import { NodeProps } from "reactflow";

type NodeData = {
  value: number;
};

export const Label = ({ data }: NodeProps<NodeData>) => (
  <div>Label: {data.value}</div>
);

export const Resize = ({ data }: NodeProps<NodeData>) => (
  <div>Resizer {data.value}</div>
);

export const InputText = ({ data }: NodeProps<NodeData>) => {
  return <div>TextUpdater {data.value}</div>;
};

export const AssetType1 = ({ data }: NodeProps<NodeData>) => (
  <div>AssetType1: {data.value}</div>
);
