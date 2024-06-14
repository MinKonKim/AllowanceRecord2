import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useUserStore from "../zustand/useUserStore";
import Header from "./Header";
function Layout() {
  const { user } = useUserStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, []);

  return (
    <div>
      <Header user={user} />
      <Outlet />
    </div>
  );
}

export default Layout;
