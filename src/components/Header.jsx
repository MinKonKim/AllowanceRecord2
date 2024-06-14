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
        {user && <li onClick={handleClickModalOpen}>내 프로필</li>}
      </ul>
      {user && (
        <StyledProfile onClick={handleClickModalOpen}>
          <UserAvatar src={user.avatar || null} alt="UserAvatar" />
          <UserNickname>{user.nickname}</UserNickname>
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

const UserAvatar = styled.img`
  background-color: aliceblue;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 3px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
const UserNickname = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin: 5px;
  padding: 5px;
`;
const StyledProfile = styled.div`
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 10px;
  margin-right: 10px;
  flex: 1;
  align-items: center;
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
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;

      a {
        color: #fff;
        text-decoration: none;
        &:hover {
          color: #311;
        }
      }

      &:hover {
        color: #311;
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
