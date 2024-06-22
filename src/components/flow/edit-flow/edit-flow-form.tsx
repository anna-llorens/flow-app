import { Button } from "../../button";
import { useState } from "react";
import { LabelText } from "./styles";
import styled from "styled-components";

const ActionsContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: end;
`;

export const EditFlowForm = ({ data }: { data: string }) => {
  const [name, setName] = useState(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.info(`The name you entered was: ${name}`);
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

      <label>
        <LabelText>Asset name:</LabelText>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%" }}
        />
      </label>
    </form>
  );
};
