import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import { AuthContext } from "../context/AuthContext";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

// PrivateRoute : 로그인이 필요한 페이지에 접근할 수 있도록 하는 컴포넌트
// 로그인이 되어있지 않은 사용자는 login 페이지로 리다이렉트
const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/signin" />;
};

// PublicRoute : 로그인이 필요없는 페이지에 접근할 수 있도록 하는 컴포넌트
// 로그인이 되어있는 사용자는 mypage로 리다이렉트
const PublicRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated ? <Element {...rest} /> : <Navigate to="/" />;
};

const SharedRouter = (user) => (
  <BrowserRouter>
    <Layout user={user}>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/detail/:id" element={<PrivateRoute element={Detail} />} />
        <Route path="/signin" element={<PublicRoute element={SignIn} />} />
        <Route path="/signup" element={<PublicRoute element={SignUp} />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default SharedRouter;
