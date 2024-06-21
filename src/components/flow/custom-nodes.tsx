import { NodeProps } from "reactflow";

type NodeData = {
  value: number;
};

export const MyCustomNode = ({ data }: NodeProps<NodeData>) => (
  <div>A big number: {data.value}</div>
);

export function TextUpdater({ data }: NodeProps<NodeData>) {
  return <div>TextUpdater {data.value}</div>;
}
