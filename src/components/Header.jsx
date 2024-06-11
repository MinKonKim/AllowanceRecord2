import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";

function Header() {
  const handleLogout = () => {
    const confirmLogout = window.confirm("정말로 로그아웃 하시겠습니까?");
    if (confirmLogout) {
      Navigate("/");
    }
  };
  return (
    <HeaderWrapper>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">내 프로필</Link>
        </li>
      </ul>
      <button onClick={handleLogout}>로그아웃</button>
    </HeaderWrapper>
  );
}

export default Header;

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
