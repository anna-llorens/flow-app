import { Edge, Node, Position } from "reactflow";
import { Agent, Organization, Team } from "../types";

const agent: Agent = {
  id: "agent-1",
  name: "John Doe",
  email: "",
  roles: "foreman",
};

export const BriffTeam: Team = {
  id: "",
  name: "",
  members: [agent],
  organizationId: "org-1",
};

export const BriffOrganization: Organization = {
  id: "org-1",
  name: "Briff",
  teams: [BriffTeam],
};

export const team1Nodes: Node[] = [
  {
    id: "team-id-org",
    position: { x: 250, y: 43.0167 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: null,
    style: {
      width: 200,
      height: 200,
      backgroundColor: "transparent",
    },
  },
  {
    id: "asset-1-type-1",
    position: { x: 20, y: 77.6997 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: {
      label:
        "Asset - Type 1 - Detail Asset - Type 1 - Detail Asset - Type 1 - Detail Asset - Type 1 - Detail Asset - Type 1 - Detail Asset - Type 1 - Detail ",
    },
  },
  {
    id: "agent",
    position: { x: 280, y: 180 },
    type: "output",
    targetPosition: Position.Top,
    data: { label: "Name Surname -  Title" },
  },
  {
    id: "team-id",
    position: { x: 280, y: 70 },
    type: "input",
    sourcePosition: Position.Bottom,
    data: { label: "Team Name - Number of officers" },
  },

  {
    id: "asset-2-type-3",
    position: { x: 570, y: 30 },
    type: "output",
    targetPosition: Position.Left,
    data: { label: "Asset name and #" },
  },
  {
    id: "asset-3-type-3",
    position: { x: 570, y: 100 },
    type: "output",
    targetPosition: Position.Left,
    data: { label: "Asset name and #" },
  },
  {
    id: "asset-4-type-3",
    position: { x: 570, y: 170 },
    type: "output",
    targetPosition: Position.Left,
    data: { label: "Asset name and #" },
  },
  {
    id: "asset-5-type-3",
    position: { x: 570, y: 240 },
    type: "output",
    targetPosition: Position.Left,
    data: { label: "Asset name and #" },
  },
];
export const team1Edges: Edge[] = [
  { id: "e1-2", source: "asset-1-type-1", target: "team-id-org" },
  { id: "e2-3", source: "team-id-org", target: "asset-2-type-3" },
  { id: "e1-4", source: "team-id-org", target: "asset-3-type-3" },
  { id: "team-asset-3", source: "team-id-org", target: "asset-4-type-3" },
  { id: "team-asset-5", source: "team-id-org", target: "asset-5-type-3" },
  { id: "team-agent", source: "team-id", target: "agent" },
];
