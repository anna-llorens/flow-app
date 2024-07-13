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

  function updateNodeInTeam1(nodeToUpdate: Node, teamId: string) {
    // Create a new data structure to avoid mutating the original data
    const newData = {
      ...data,
      teams: data.teams.map((team) => {
        // Check if this is the team to update
        if (team.id === teamId) {
          return {
            ...team,
            nodes: team.nodes.map((node) => {
              // Check if this is the node to update
              if (node.id === nodeToUpdate.id) {
                // Return the updated node
                return { ...node, ...nodeToUpdate };
              }
              return node; // Return the node as is if it's not the one to update
            }),
          };
        }
        return team; // Return the team as is if it's not the one to update
      }),
    };

    return newData; // Return the new data structure with the updated node
  }

  const updateSelectedNode = (node: Node<typeof Asset>) => {
    localStorage.removeItem("appData");
    setSelectedNode(node);
    setData(updateNodeInTeam1(node, "team-1"));
    const aa = updateNodeInTeam1(node, "team-1");
    localStorage.setItem("appData", JSON.stringify(aa));
    console.log(aa, "Updated node in team 1");
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
