import { createContext, useState, useEffect, useContext } from "react";
import { Node } from "reactflow";
import { AppContextType, AppData } from "./types";
import { Asset } from "./components/nodes/asset";
import { defaultContextData } from "./data/data";

const AppContext = createContext<AppContextType | null>(null);

const AppProvider = ({ children }) => {
  const [data, setData] = useState<AppData | null>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem("appData");
    if (storedData) {
      console.log(" Getting data from local storage");
      setData(JSON.parse(storedData));
    } else {
      setData(defaultContextData.data);
      console.log(" Getting data from default data");
      localStorage.setItem("appData", JSON.stringify(defaultContextData.data));
    }
  }, []);

  const updateNodeInTeam = (nodeToUpdate: Node) => {
    setData((currentData) => {
      return {
        ...currentData,
        teams: currentData.teams.map((team) => ({
          ...team,
          nodes: team.nodes.map((node) =>
            node.id === nodeToUpdate.id ? { ...node, ...nodeToUpdate } : node
          ),
        })),
      };
    });
    localStorage.setItem("appData", JSON.stringify(data));
  };

  const updateSelectedNode = (node: Node<typeof Asset>) => {
    setSelectedNode(node);
    updateNodeInTeam(node);
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
