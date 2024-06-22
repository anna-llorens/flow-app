import { BackgroundVariant, Edge, Node } from "reactflow";

import { SelectorPanel } from "../components/flow/edit-flow/selector-panel";
import {
  EditFlowPageWrapper,
  StyledEditFlow,
} from "../components/flow/edit-flow/styles";
import { EditFlowPanel } from "../components/flow/edit-flow/edit-flow-panel";

type EditFlowPageProps = {
  initialEdges: Edge[];
  initialNodes: Node[];
};

export const EditFlowPage: React.FC<EditFlowPageProps> = ({
  initialEdges,
  initialNodes,
}) => (
  <EditFlowPageWrapper>
    <SelectorPanel />
    <StyledEditFlow
      background={BackgroundVariant.Lines}
      draggable
      initialEdges={initialEdges}
      initialNodes={initialNodes}
      height="800px"
      showControls
      showMiniMap
      width="1000px"
      withBorder
      zoom
    />
    <EditFlowPanel />
  </EditFlowPageWrapper>
);
