import { BackgroundVariant, Edge, Node } from "reactflow";

import { SelectorPanel } from "../components/flow/edit-flow/selector-panel";
import { EditFlowPageWrapper } from "../components/flow/edit-flow/styles";
import { Flow } from "../components/flow";
import { EditFlowForm } from "../components/flow/edit-flow/edit-flow-form";
import { FlowProps } from "../components/flow/flow";
import { useAppContext } from "../app-context";

type EditFlowPageProps = {
  initialEdges: Edge[];
  initialNodes: Node[];
};

const defaultFlowProps: Partial<FlowProps> = {
  height: "800px",
  width: "1000px",
  background: BackgroundVariant.Lines,
  draggable: true,
  showControls: true,
  showMiniMap: true,
  withBorder: true,
  zoom: true,
};

export const EditFlowPage: React.FC<EditFlowPageProps> = ({
  initialEdges,
  initialNodes,
}) => {
  const { updateSelectedNode } = useAppContext();

  const onNodeClick = (_event: React.MouseEvent, node: Node) =>
    updateSelectedNode(node);

  return (
    <EditFlowPageWrapper>
      <SelectorPanel />
      <Flow
        initialEdges={initialEdges}
        initialNodes={initialNodes}
        onNodeClick={onNodeClick}
        {...defaultFlowProps}
      />
      <EditFlowForm />
    </EditFlowPageWrapper>
  );
};
