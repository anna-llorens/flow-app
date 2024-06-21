import "reactflow/dist/style.css";
import { TabsComponent } from "../../components/tabs";
import { Flow } from "../../components/flow";
import { team1Nodes, team1Edges } from "../../data/data";

export const TeamsPage = () => {
  const onNewTeamClick = () =>
    console.info("🚧 Add modal to fill with basic data for a new team");

  return (
    <>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <button>Save Changes</button>
      </div>
      <TabsComponent
        tabs={[
          {
            label: "⭐️ Favorites",
          },
          {
            label: "Team 1",
            children: (
              <>
                <TabsComponent
                  tabs={[
                    {
                      label: "Members",
                    },
                  ]}
                />
                <Flow
                  initialNodes={team1Nodes}
                  initialEdges={team1Edges}
                  fitView
                />
              </>
            ),
          },
          { label: "➕", onClick: onNewTeamClick },
        ]}
      ></TabsComponent>
    </>
  );
};
