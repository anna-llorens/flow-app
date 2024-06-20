export type AppRole = {
  superAdmin: boolean;
  agent: boolean;
};

export type AgentRole = {
  admin: boolean;
  foreman: boolean;
  fireman: boolean;
  technical: boolean;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: AppRole;
};

export type Team = {
  id: string;
  name: string;
  members: Agent[];
  organization: Organization;
};

export type Organization = {
  id: string;
  name: string;
  teams: Team[];
};

export type Agent = {
  organization: Organization;
  agentRoles: AgentRole;
} & User;

export type Mission = {
  location: string;
  date: string;
  active: boolean;
};

export type Incident = {
  id: string;
  name: string;
  description: string;
  location: string;
  date: string;
  time: string;
  tags: string[];
  mission: Mission;
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
