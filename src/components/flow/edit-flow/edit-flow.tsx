import { styled } from "styled-components";
import { TeamFlow } from "../team-flow";
import { BackgroundVariant } from "reactflow";
import { EditFlowControl } from "./edit-flow-control";
import { SelectorPanel } from "./selector-panel";

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const EditFlowPage = () => {
  return (
    <Wrapper>
      <SelectorPanel />
      <TeamFlow
        width="1000px"
        height="800px"
        zoom
        draggable
        showControls
        showMiniMap
        background={BackgroundVariant.Cross}
      />
      <EditFlowControl />
    </Wrapper>
  );
};
