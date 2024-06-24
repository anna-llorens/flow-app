import { Edge, Node } from "reactflow";

export type User = {
  id: string;
  name: string;
  admin?: boolean;
  role: string;
};

export type Team = {
  id: string;
  name: string;
  members: User[];
  nodes?: Node[];
  edges?: Edge[];
};

export type Asset = {
  type: string;
  name: string;
  description: string;
  id?: string;
  teamId?: string;
};

export type AppData = {
  teams: Team[];
};

export type AppContextType = {
  data: AppData;
  selectedNode?: Node;
  updateSelectedNode?: (node: Node) => void;
};
