import "reactflow/dist/style.css";
import { TabsComponent } from "../../components/tabs";
import { Link } from "@mui/material";
import styled from "styled-components";
import { Routes } from "../../Routes";
import { team1Edges, teamOrganization } from "../../data/data";
import { Flow } from "../../components/flow";

const LinksWrapper = styled.section`
  display: flex;
  gap: 16px;
`;

const StyledText = styled.span`
  color: #1976d2;
`;

const FlowWrapper = styled.div`
  margin-top: 16px;
`;
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
                <LinksWrapper>
                  <Link href={Routes.teamOrg}>Org</Link>
                  <StyledText> / </StyledText>
                  <Link href={Routes.teamMembers}>Members</Link>
                </LinksWrapper>
                {/* ADD React Router, several tabs */}
                <FlowWrapper>
                  <Flow
                    initialNodes={teamOrganization}
                    initialEdges={team1Edges}
                    type="team"
                    fitView
                    zoom={false}
                  />
                </FlowWrapper>
              </>
            ),
          },
          { label: "➕", onClick: onNewTeamClick },
        ]}
      ></TabsComponent>
    </>
  );
};
