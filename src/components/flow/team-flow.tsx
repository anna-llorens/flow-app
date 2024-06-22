import styled from "styled-components";
import { Flow } from ".";
import { team1Edges, teamOrganization } from "../../data/data";
import { Button } from "../button";
import { Link as RouterLink } from "react-router-dom";

const FlowWrapper = styled.div`
  margin-top: 16px;
  height: 316px;
  width: 800px;
`;

const defaultFlowProps = {
  fitView: true,
  zoom: false,
  draggable: false,
};

export const TeamFlow = () => {
  return (
    <FlowWrapper>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button>
          <RouterLink to="/teams/edit">Edit</RouterLink>
        </Button>
      </div>
      <Flow
        initialNodes={teamOrganization}
        initialEdges={team1Edges}
        {...defaultFlowProps}
      />
    </FlowWrapper>
  );
};
