/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Node, Position } from "reactflow";
import styled from "styled-components";
import { Button } from "../../button";

const FormLabel = styled.div`
  margin-top: 16px;
  color: #1976d2;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Container = styled.div`
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  flex-grow: 1;
  padding-inline: 8px;
`;

const nodeData: Node = {
  id: "asset-1-type-1",
  type: "asset",
  position: { x: 20, y: 77.6997 },
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
  style: {
    width: 150,
    height: 130,
  },
  data: {
    label: "Asset - Type 1 Details",
    name: "Asset Name",
  },
};

function MyForm({ data }: { data: string }) {
  const [name, setName] = useState(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Button type="submit" variant="contained">
          Save
        </Button>
      </div>
      <FormLabel>Asset name:</FormLabel>
      <label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%" }}
        />
      </label>
    </form>
  );
}

export const EditFlowControl = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [node, setNode] = useState<Node>(nodeData);

  return (
    <Container>
      <div>
        <p>Edit Flow Control</p>
      </div>
      <MyForm data={node.data.name} />
      <FormLabel>Asset type:</FormLabel>
      <div>{node.data.label}</div>
    </Container>
  );
};
