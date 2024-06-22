import styled from "styled-components";
import { Flow } from "../../flow/flow";

export const EditFlowPageWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 16px;
`;

export const StyledEditFlow = styled(Flow)``;

export const EditFlowContainer = styled.div`
  flex-grow: 1;
  padding-inline: 8px;
`;

export const LabelText = styled.label`
  margin-top: 16px;
  color: #1976d2;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const StyledSelectorPanel = styled.div`
  width: 150px;
`;
