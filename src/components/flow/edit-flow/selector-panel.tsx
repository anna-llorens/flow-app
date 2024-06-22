import styled from "styled-components";

const Container = styled.div`
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  flex-grow: 1;
`;

export const SelectorPanel = () => {
  return (
    <Container>
      <p>Selector Panel</p>
    </Container>
  );
};
