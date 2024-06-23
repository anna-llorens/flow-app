import { Button } from "../../button";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { InputField } from "../../inputs/input-field";

import { TextArea } from "../../inputs/text-area";
import { useAppContext } from "../../../app-context";
import { EditFlowContainer } from "./styles";

const ActionsContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: end;
`;

// Custom node team and and asset_2

export const EditFlowForm = () => {

// Implement Generic form for editing nodes
// Implement the ability to discard changes
// Implement the ability to save changes

  const { selectedNode, updateSelectedNode } = useAppContext();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const prevNameRef = useRef("");
  const prevDescriptionRef = useRef("");

  useEffect(() => {
    if (selectedNode) {
      setName(selectedNode.data?.name);
      setDescription(selectedNode.data?.description);
      prevNameRef.current = selectedNode.data?.name;
      prevDescriptionRef.current = selectedNode.data?.description;
    }
  }, [selectedNode]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onDiscardClick = () => {
    setName(prevNameRef.current);
    setDescription(prevDescriptionRef.current);
    // TODO: Add a confirmation dialog
    // TODO : Disable discard button if no changes
  };
  const onSaveClick = () => {
    prevNameRef.current = name;
    prevDescriptionRef.current = description;
    updateSelectedNode({ ...selectedNode, data: { name, description } });
  };

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  return (
    <EditFlowContainer>
      <form onSubmit={handleSubmit}>
        <h5>Edit Team</h5>
        <ActionsContainer>
          <Button variant="destroy" onClick={onDiscardClick}>
            Discard Changes
          </Button>
          <Button variant="contained" onClick={onSaveClick}>
            Save
          </Button>
        </ActionsContainer>
        <InputField label="Asset" value={name} onChange={onNameChange} />
        <TextArea
          value={description}
          label="Description"
          onChange={onDescriptionChange}
        />
      </form>
    </EditFlowContainer>
  );
};
