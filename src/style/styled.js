import styled from "styled-components";

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 36px;

  span {
    margin: 10px;
  }

  input {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 25px;
    width: 95%;

    &:focus {
      border-color: blue;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`;

export const StyledButton = styled.button`
  height: 50px;
  margin: 10px;
  border-radius: 8px;
  border-color: #bbb;
  background-color: ${(props) => props.bgcolor};

  width: 100%;
  font-size: 20px;
  font-weight: 900;
  &:hover {
    background-color: rgb(0, 0, 0, 0.1);
  }
`;
export const Outer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
