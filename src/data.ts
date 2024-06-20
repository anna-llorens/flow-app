import { Edge, Node } from "reactflow";
import { Organization, Team } from "./types";

export const initialNodes: Node[] = [
  {
    id: "asset-1",
    position: { x: 40, y: 20 },
    data: { label: "Asset - Type 1" },
  },
  { id: "2", position: { x: 40, y: 120 }, data: { label: "Node 2" } },
  { id: "3", position: { x: 40, y: 220 }, data: { label: "Node 3" } },
  { id: "4", position: { x: 300, y: 120 }, data: { label: "Node 4" } },
];
export const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e1-4", source: "1", target: "4" },
];

export const BriffOrganization: Organization = {
  id: "",
  name: "",
  teams: [],
};

export const BriffTeam: Team = {
  id: "BRIFF",
  name: "BRIF",
  members: [],
  organization: {
    id: "",
    name: "",
    teams: [],
  },
};
