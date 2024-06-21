import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { team1Nodes, team1Edges } from '../data/data';
import { Flow } from './flow';
import { initialEdges, initialNodes } from '../data/example-3.js';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="team tabs">
          <Tab label="Team 1" {...a11yProps(0)} />
          <Tab label="Team 2" {...a11yProps(1)} />
          <Tab label="Team 3" {...a11yProps(2)} />
          <Tab label=" ➕ " {...a11yProps(2)} onClick={() => console.info('🚧 Add modal to fill with basic data for a new team')}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
       <Flow initialNodes={team1Nodes} initialEdges={team1Edges} fitView/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Flow initialNodes={team1Nodes} initialEdges={team1Edges} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Flow initialEdges={initialEdges} initialNodes={initialNodes} fitView/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
 
      </CustomTabPanel>
    </Box>
  );
}
