import styled from "styled-components";

export const StyledNode = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  border: 1px solid #000;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;

  .react-flow__resize-control.handle {
    width: 10px;
    height: 10px;
    border-radius: 100%;
  }
`;

export const RotateHandle = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background: #3367d9;
  left: 50%;
  top: -30px;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  cursor: alias;

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 1px;
    height: 30px;
    background: #3367d9;
    left: 4px;
    top: 5px;
  }
`;

// Usage:
// <Node>
//   {/* Your content here */}
//   <RotateHandle />
// </Node>;
