import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Charge from "./pages/Charge";
import Gyms from "./pages/Gyms";
import MakeGroup from "./pages/MakeGroup";
import Stretching from "./pages/Stretching";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Information from "./pages/Information";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/gyms",
    element: <Gyms />,
  },
  {
    path: "/information",
    element: <Information />,
  },
  {
    path: "/charge",
    element: <Charge />,
  },
  {
    path: "/makeGroup",
    element: <MakeGroup />,
  },
  {
    path: "/stretching",
    element: <Stretching />,
  },
]);

export default router;
