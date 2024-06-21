import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { Edge, Node } from "reactflow";
import { useState } from "react";

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};
type TabType = {
  label: string;
  onClick?: () => void;
  nodes?: Node[];
  edges?: Edge[];
  children?: React.ReactNode;
};

type Props = {
  tabs: TabType[];
  children?: React.ReactNode;
};

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`teams-tabpanel-${index}`}
      aria-labelledby={`teams-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export const TabsComponent: React.FC<Props> = ({ tabs, children }) => {
  const [activeTeam, setActiveTeam] = useState(1);

  const handleChange = (_event: React.SyntheticEvent, teamTab: number) =>
    setActiveTeam(teamTab);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={activeTeam}
            onChange={handleChange}
            aria-label="team tabs"
          >
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab.label} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Box>
        {tabs.map((tab, index) => (
          <TabPanel key={index} value={activeTeam} index={index}>
            {tab?.children}
          </TabPanel>
        ))}
      </Box>
      {children}
    </>
  );
};
