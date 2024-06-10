import { createBrowserRouter } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/record/:recordId",
    element: <DetailPage />,
  },
]);

export default router;
