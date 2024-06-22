import styled from "styled-components";
import { Flow } from "../../components/flow";
import { team1Edges, teamOrganization } from "../../data/data";
import { Button } from "../../components/button";

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
  
  const onEditClick = () => {
    console.info("Redirect to the edit team page");
  };

  return (
    <FlowWrapper>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button onClick={onEditClick}>Edit</Button>
      </div>
      <Flow
        initialNodes={teamOrganization}
        initialEdges={team1Edges}
        {...defaultFlowProps}
      />
    </FlowWrapper>
  );
};
