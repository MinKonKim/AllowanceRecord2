import styled from "styled-components";
import { ButtonGroup, InputGroup, Outer, StyledButton } from "../style/styled";

function Login() {
  return (
    <Outer>
      <LoginWrapper>
        <InputGroup>
          <span>로그인 아이디</span>
          <input placeholder="아이디" />
        </InputGroup>
        <InputGroup>
          <span>비밀번호</span>
          <input placeholder="비밀번호" />
        </InputGroup>
        <ButtonGroup>
          <StyledButton bgcolor={"#eeeeee"}>로그인</StyledButton>
          <StyledButton bgcolor={"#a1c01b"}>회원가입</StyledButton>
        </ButtonGroup>
      </LoginWrapper>
    </Outer>
  );
}

export default Login;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
  width: 50%;
  background-color: aliceblue;
  border-radius: 8px;

  box-shadow: 4px 6px 0px rgba(0, 0, 0, 0.1);
`;
