import { useContext } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Layout from "../components/Layout";
import { AuthContext } from "../context/AuthContext";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyPage from "../pages/MyPage";
import SignUp from "../pages/SignUp";

// PrivateRoute : 로그인이 필요한 페이지에 접근할 수 있도록 하는 컴포넌트
// 로그인이 되어있지 않은 사용자는 login 페이지로 리다이렉트
const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
};

// PublicRoute : 로그인이 필요없는 페이지에 접근할 수 있도록 하는 컴포넌트
// 로그인이 되어있는 사용자는 mypage로 리다이렉트
const PublicRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated ? <Element {...rest} /> : <Navigate to="/mypage" />;
};

const SharedRouter = (expenses, setExpenses) => (
  <Router>
    <Layout>
      <Routes>
        <Route
          path="/"
          element={<Home expenses={expenses} setExpenses={setExpenses} />}
        />
        <Route
          path="/detail/:id"
          element={<Detail expenses={expenses} setExpenses={setExpenses} />}
        />
        <Route path="/login" element={<PublicRoute element={Login} />} />
        <Route path="/signup" element={<PublicRoute element={SignUp} />} />
        <Route path="/mypage" element={<PrivateRoute element={MyPage} />} />
      </Routes>
    </Layout>
  </Router>
);

export default SharedRouter;
