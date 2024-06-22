import "reactflow/dist/style.css";
import { TabsComponent } from "../../components/tabs";
import { Link } from "@mui/material";
import styled from "styled-components";
import { Routes } from "../../Routes";
import { TeamFlow } from "./team-flow";

const LinksWrapper = styled.section`
  display: flex;
  gap: 16px;
`;

const Separator = styled.span`
  color: #1976d2;
`;

export const TeamsPage = () => {
  const onNewTeamClick = () =>
    console.info("🚧 Add modal to fill with basic data for a new team");

  return (
    <>
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
                  <Separator> / </Separator>
                  <Link href={Routes.teamMembers}>Members</Link>
                </LinksWrapper>
                {/* ADD React Router, several tabs */}
                <TeamFlow />
              </>
            ),
          },
          { label: "➕", onClick: onNewTeamClick },
        ]}
      />
    </>
  );
};
