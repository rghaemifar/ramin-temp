import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import "react-leaflet";
import LoginWrapper from "./component/LoginWrapper";
import Monit from "./pages/Monit";
import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <LoginWrapper>
            <Monit />
          </LoginWrapper>
        }
      ></Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default App;
