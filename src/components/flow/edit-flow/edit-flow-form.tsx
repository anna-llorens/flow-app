import { Button } from "../../button";
import { useState } from "react";
import styled from "styled-components";
import { LabelField } from "../../label-field";
import { AssetType } from "../../../types";

const ActionsContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: end;
`;

export const EditFlowForm = ({ data }: { data: AssetType }) => {
  const [name, setName] = useState(data.name);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.info(`Name submitvale: ${name}`);
  };

  const onNameChange = (e) => {
    console.info(`Name vale: ${e.target.value}`);
    setName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ActionsContainer>
        <Button type="submit" variant="destroy">
          Discard Changes
        </Button>
        <Button type="submit" variant="contained">
          Save
        </Button>
      </ActionsContainer>
      <LabelField label="Asset name" value={name} onChange={onNameChange} />
      <LabelField label="Asset type" value={data.label} disabled />
      <LabelField label="Description" value={data.description} />
    </form>
  );
};
