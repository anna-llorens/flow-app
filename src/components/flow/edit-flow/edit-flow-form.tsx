import { Button } from "../../button";
import { useState } from "react";
import styled from "styled-components";
import { InputField } from "../../inputs/input-field";
import { AssetType } from "../../../types";
import { TextArea } from "../../inputs/text-area";

const ActionsContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: end;
`;

export const EditFlowForm = ({ data }: { data: AssetType }) => {
  const [name, setName] = useState(data?.name);
  const [description, setDescription] = useState(data?.description);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.info(`Name submit value --> ${name}`);
    console.info(`Description submit value --> ${description}`);
  };

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.info(`Name value: ${event.target.value}`);
    setName(event.target.value);
  };

  const onDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.info(`Description value: ${event.target.value}`);
    setDescription(event.target.value);
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
      <InputField label="Asset" value={name} onChange={onNameChange} />
      <InputField
        name="Asset Type"
        label="Asset Type"
        value={data?.type}
        placeholder="Asset Type"
        disabled
      />
      <TextArea
        value={description}
        label="Description"
        onChange={onDescriptionChange}
      />
    </form>
  );
};
