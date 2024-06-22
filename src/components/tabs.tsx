import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";

import { Edge, Node } from "reactflow";
import { useState } from "react";
import Tab from "@mui/material/Tab";
import { useLocation } from "react-router-dom";

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
  route?: string;
  children?: React.ReactNode;
};

type Props = {
  tabs: TabType[];
  children?: React.ReactNode;
};

interface LinkTabProps {
  label?: string;
  href?: string;
  selected?: boolean;
}

function samePageLinkNavigation(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected ? "page" : undefined}
      {...props}
    />
  );
}

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

  const location = useLocation();
  console.log("location", location);

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
              <LinkTab
                key={index}
                label={tab.label}
                {...a11yProps(index)}
                href={tab?.route}
              />
            ))}
          </Tabs>
        </Box>
        {tabs.map((tab, index) => (
          <TabPanel key={index} value={activeTeam} index={index}>
            {tab?.children}
            {/* <Outlet /> ??*/}
          </TabPanel>
        ))}
      </Box>
      {children}
      {/* <Outlet />?? */}
    </>
  );
};
