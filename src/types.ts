import { CSSProperties } from "react";
import { XYPosition, Position } from "reactflow";

export type AgentRole =
  | "foreman"
  | "firefighter"
  | "paramedic"
  | "police"
  | "rescuer"
  | "volunteer"
  | "other";

export type User = {
  id: string;
  name: string;
  email: string;
  admin?: boolean;
};

export type Team = {
  id: string;
  name: string;
  members: Agent[];
  organizationId: string;
  imageUrl?: string;
};

export type Organization = {
  id: string;
  name: string;
  teams: Team[];
};

export type Agent = {
  roles: AgentRole;
} & User;

export type Incident = {
  active: boolean;
  id: string;
  name: string;
  description: string;
  location: string;
  date: string;
  time: string;
  tags: string[];
};

export type Asset = {
  id: string;
  name: string;
  description: string;
  value: number;
  owner?: Organization;
  team: string;
  status: string;
  type: string;
  location: string;
  date: string;
  time: string;
  tags: string[];
  incidents: Incident[];
};


// Nodes 
export type DataType1 = {
  data: string;
  name: string;
};
export type DataType2 = {
  data: string;
  timeStamp: string;
};
export type DataType3 = {
  data: string;
  url: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Node<T = any, U extends string = string> = {
  id: string;
  position: XYPosition;
  data: T;
  type?: U;
  style?: CSSProperties;
  className?: string;
  sourcePosition: Position;
  targetPosition: Position;
};