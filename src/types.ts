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

// Data types for nodes
export type AssetType = {
  label: string;
  name: string;
  description?: string;
  type: string;
  mission?: string;
  id?: string;
};
export type NodeType2 = {
  label: string;
  timeStamp: string;
};
export type NodeType3 = {
  label: string;
  url: string;
};
