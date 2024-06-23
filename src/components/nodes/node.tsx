import styled from "styled-components";

const Card = styled.div`
  border-radius: 3px;
  border: 1px solid black;
  h4,
  h5,
  h6 {
    font-size: 12px;
    margin: 0;
    padding: 0;
  }
  /* justify-content: baseline; */
  background-color: #fff;
`;

export const NodeElement = ({ type, children = undefined }) => {
  return (
    <Card>
      <h4>{type}</h4>
      {children}
    </Card>
  );
};
