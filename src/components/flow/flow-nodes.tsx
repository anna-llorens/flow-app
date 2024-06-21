import { NodeProps } from "reactflow";

type NodeData = {
  value: number;
};

export const Label = ({ data }: NodeProps<NodeData>) => (
  <div>A big number: {data.value}</div>
);

export function InputText({ data }: NodeProps<NodeData>) {
  return <div>TextUpdater {data.value}</div>;
}
