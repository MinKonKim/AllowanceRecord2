import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { signIn } from "../lib/api/auth";
import { ButtonGroup, InputGroup, Outer, StyledButton } from "../style/styled";
import useUserStore from "../zustand/useUserStore";

function SignIn() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  // Zustand  - User 정보 저장
  const setUser = useUserStore((state) => state.setUser);

  const handleSignIn = async () => {
    const data = await signIn({
      id: id,
      password: password,
    });
    login(data.accesssToken);
    //저장
    console.log(data.userId, data.nickname);
    setUser({ id: data.userId, nickname: data.nickname, avatar: data.avater });
  };

  return (
    <Outer>
      <LoginWrapper>
        <InputGroup>
          <span>로그인 아이디</span>
          <input
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <span>비밀번호</span>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
        <ButtonGroup>
          <StyledButton bgcolor={"#eeeeee"} onClick={handleSignIn}>
            로그인
          </StyledButton>
          <StyledButton bgcolor={"#a1c01b"} onClick={() => navigate("/signup")}>
            회원가입
          </StyledButton>
        </ButtonGroup>
      </LoginWrapper>
    </Outer>
  );
}

export default SignIn;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
  width: 50%;
  background-color: aliceblue;
  border-radius: 8px;

  box-shadow: 4px 6px 0px rgba(0, 0, 0, 0.1);
`;
