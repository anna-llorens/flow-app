import { createContext, useState, useEffect, useContext } from "react";
import { Node } from "reactflow";
import { Team } from "./types";
import { Asset } from "./components/nodes/asset";

type AppData = {
  teams: Team[];
};

type AppContextType = {
  data: AppData;
  selectedNode?: Node;
  updateSelectedNode?: (node: Node) => void;
};

const defaultContextData: AppContextType = {
  data: {
    teams: [
      {
        id: "team-1",
        name: "Team 1",
        members: [],
        organizationId: "org-1",
        assets: [
          {
            name: "Asset #1",
            description: "This is asset #1",
            type: "Asset",
            id: "asset-1-type-1",
          },
        ],
      },
    ],
  },
};

const AppContext = createContext<AppContextType | null>(null);

const AppProvider = ({ children }) => {
  const [data, setData] = useState<AppData | null>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem("appData");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      setData(defaultContextData.data);
      localStorage.setItem("appData", JSON.stringify(defaultContextData.data));
    }
  }, []);

  const updateSelectedNode = (node: Node<typeof Asset>) => {
    setSelectedNode(node);
    // Update the node in the data
    console.log("🚧 Update selected node", node);
    console.log("🚧 Update selected node", node.data.name);
    
  };

  const getSelectedNode = () => {
    if (!data || !selectedNode) return null;

    return selectedNode;
  };

  return (
    <AppContext.Provider
      value={{ data, selectedNode: getSelectedNode(), updateSelectedNode }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error(
      "useAppContext should only be used within AppContextProvider"
    );
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { AppProvider, useAppContext };
