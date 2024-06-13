import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { register } from "../lib/api/auth";
import { ButtonGroup, InputGroup, Outer, StyledButton } from "../style/styled";
function SignUp() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    //유효성 검사 넣어주기
    if (id.length === 0 || id.length < 4) {
      alert("아이디는 4글자 이상이여야 합니다.");
      return;
    } else if (password.length === 0 || password.length < 4) {
      alert("비밀번호는 4글자 이상이여야 합니다.");
      return;
    } else if (nickname.length === 0 || nickname.length < 4) {
      alert("닉네임은 4글자 이상이여야 합니다.");
      return;
    }

    const response = await register({ id, password, nickname });
    console.log("회원가입 응답", response);

    confirm("회원가입이 완료되었습니다.");
    navigate("/signin");
    setId("");
    setPassword("");
    setNickname("");
  };

  return (
    <Outer>
      <SignUpWrapper>
        <InputGroup>
          <span>회원가입 아이디</span>
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
        <InputGroup>
          <span>닉네임</span>
          <input
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />{" "}
        </InputGroup>
        <ButtonGroup>
          <StyledButton bgcolor={"#66666"} onClick={handleRegister}>
            회원가입
          </StyledButton>
          <StyledButton bgcolor={"#a1c01b"} onClick={() => navigate("/signin")}>
            로그인화면으로
          </StyledButton>
        </ButtonGroup>
      </SignUpWrapper>
    </Outer>
  );
}

export default SignUp;

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
  width: 50%;
  background-color: aliceblue;
  border-radius: 8px;

  box-shadow: 4px 6px 0px rgba(0, 0, 0, 0.1);
`;
