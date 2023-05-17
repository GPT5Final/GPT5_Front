import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Gyms from "./pages/gyms/Gyms";
import GymsUpload from "./pages/gyms/GymsUpload";
import GymsUpdate from "./pages/gyms/GymsUpdate";
import GymsDetail from "./pages/gyms/GymsDetail";
import Stretching from "./pages/Stretching";
import Home from "./pages/community/Home";
import MyGroup from "./pages/community/MyGroup";
import PartnerMentor from "./pages/community/PartnerMentor";
import MentorMentee from "./pages/community/MentorMentee";
import ExerciseTalk from "./pages/community/ExerciseTalk";
import MakeGroup from "./pages/community/MakeGroup";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Mypage from "./pages/mypage/Mypage";
import Mypagecal from "./pages/mypage/Mypagecal";
import Mypagegroup from "./pages/mypage/Mypagegroup";
import Mypageleave from "./pages/mypage/Mypageleave";
import Mypagereference from "./pages/mypage/Mypagereference";

import Guide from "./pages/Guide";
import Diet from "./pages/Diet";
import Exercise from "./pages/Exercise";
import Information from "./pages/Information";
import ChargeBbs from "./pages/pay/ChargeBbs";
import PaymentBbs from "./pages/pay/PaymentBbs";
import Charge from "./pages/pay/Charge";
import PayCoin from "./pages/pay/payCoin";
import Trainers from "./pages/gyms/Trainers";
import TrainersUpload from "./pages/gyms/TrainersUpload";
import TrainersUpdate from "./pages/gyms/TrainersUpdate";
import TrainersDetail from "./pages/gyms/TrainersDetail";
import Inquiry from "./pages/inquiry/inquiry";
import InqWrite from "./pages/inquiry/inqWrite";
import InquiryDetail from "./pages/inquiry/inquiryDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/main" element={<Main />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mypagecal" element={<Mypagecal />} />
        <Route path="/mypagegroup" element={<Mypagegroup />} />
        <Route path="/mypageleave" element={<Mypageleave />} />
        <Route path="/mypagereference" element={<Mypagereference />} />
        <Route path="/Inquiry" element={<Inquiry />} />
        <Route
          path="/Inquiry/:choice/:search/:nickname"
          element={<Inquiry />}
        />
        <Route path="/InquiryDetail/:seq" element={<InquiryDetail />} />
        <Route path="/InqWrite" element={<InqWrite />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gyms" element={<Gyms />} />
        <Route path="/gymsupload" element={<GymsUpload />} />
        <Route path="/gymsupdate" element={<GymsUpdate />} />
        <Route path="/gym/:id" element={<GymsDetail />} />
        <Route path="/charge" element={<Charge />} />
        <Route path="/community/Home" element={<Home />} />
        <Route path="/community/MyGroup" element={<MyGroup />} />
        <Route path="/community/PartnerMentor" element={<PartnerMentor />} />
        <Route path="/community/MentorMentee" element={<MentorMentee />} />
        <Route path="/community/ExerciseTalk" element={<ExerciseTalk />} />
        <Route path="/community/MakeGroup" element={<MakeGroup />} />
        <Route path="/stretching" element={<Stretching />} />
        <Route path="/information" element={<Information />} />
        <Route path="/ChargeBbs" element={<ChargeBbs />} />
        <Route path="/PaymentBbs" element={<PaymentBbs />} />
        <Route path="/payCoin" element={<PayCoin />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/trainersupload" element={<TrainersUpload />} />
        <Route path="/trainersupdate" element={<TrainersUpdate />} />
        <Route path="/trainer/:id" element={<TrainersDetail />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/stretching" element={<Stretching />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
