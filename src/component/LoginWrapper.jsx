import React from "react";
import { isLoggedIn } from "../utils/auth";
import { useLocation, useNavigate } from "react-router-dom";

const LoginWrapper = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  React.useEffect(() => {
    const hasToken = isLoggedIn();
    if (hasToken) return;
    navigate("/login/");
  }, []);

  return <>{children}</>;
};

export default LoginWrapper;
