import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import Profile from "../pages/Profile";
import { useModal } from "./Modal/Modal.context";

function Header({ user }) {
  const modal = useModal();
  const navigate = useNavigate();

  const { logout } = useContext(AuthContext);

  const handleClickModalOpen = () => {
    modal.open(<Profile />);
  };

  const handleLogout = () => {
    if (window.confirm("정말로 로그아웃 하시겠습니까?")) {
      logout();
      navigate("/signin");
    }
  };
  return (
    <HeaderWrapper>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {user && (
          <li>
            <StyledDiv onClick={handleClickModalOpen}>내 프로필</StyledDiv>
          </li>
        )}
      </ul>
      {user && (
        <StyledProfile>
          <img src={user.avatar} />
          <span>{user.nickname}</span>
        </StyledProfile>
      )}

      {user ? (
        <button onClick={handleLogout}>로그아웃</button>
      ) : (
        <button onClick={() => navigate("/signin")}>로그인</button>
      )}
    </HeaderWrapper>
  );
}

export default Header;

const StyledProfile = styled.div`
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 10px;
  margin-right: 10px;
  flex: 1;
  align-items: end;
  justify-content: end;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;

  margin-bottom: 10px;
  nav {
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-right: 1rem;

      a {
        color: #fff;
        text-decoration: none;

        &:hover {
          color: #ccc;
        }
      }
    }
  }

  button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #45a049;
    }
  }
`;

const StyledDiv = styled.div`
  cursor: pointer;
`;
