import React from "react";
import "./App.css";
import { Routes, Route } from "react";
import "react-leaflet";
import LoginWrapper from "./component/LoginWrapper";
import Monit from "./pages/Monit";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LoginWrapper>
            <Monit />
          </LoginWrapper>
        }
      >
        <Route path="login" element={() => <div>login</div>} />
      </Route>
    </Routes>
  );
};

export default App;
