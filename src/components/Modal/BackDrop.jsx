import styled from "styled-components";

function BackDrop({ children }) {
  return <StyledBackDrop>{children}</StyledBackDrop>;
}

export default BackDrop;

const StyledBackDrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
`;
