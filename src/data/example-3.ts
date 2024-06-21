import { Edge, Node, FitViewOptions, DefaultEdgeOptions } from "reactflow";

export const initialNodes: Node[] = [
  {
    id: "1",
    data: { value: "400" },
    position: { x: 5, y: 5 },
    type: "custom",
    style: { background: "#cc4c21", color: "#fff", border: "1px solid #fcc" },
  },
  { id: "2", data: { label: "Node 2" }, position: { x: 5, y: 100 } },
  { id: "3", data: { label: "Node 3" }, position: { x: 250, y: 100 } },
];

export const initialEdges: Edge[] = [{ id: "e11-2", source: "3", target: "2" }];

export const fitViewOptions: FitViewOptions = {
  padding: 0.2,
};

export const defaultEdgeOptions: DefaultEdgeOptions = {
  deletable: false,
};
