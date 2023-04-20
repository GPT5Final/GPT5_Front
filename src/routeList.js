import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Charge from "./pages/Charge";
import Gyms from "./pages/Gyms";
import MakeGroup from "./pages/MakeGroup";
import Stretching from "./pages/Stretching";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Mypage from "./pages/Mypage";
import Information from "./pages/Information";
import Inquriy from "./pages/Inquriy";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/main" element={<Main />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gyms" element={<Gyms />} />
        <Route path="/charge" element={<Charge />} />
        <Route path="/makeGroup" element={<MakeGroup />} />
        <Route path="/stretching" element={<Stretching />} />
        <Route path="/information" element={<Information />} />
        <Route path="/inquriy" element={<Inquriy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
