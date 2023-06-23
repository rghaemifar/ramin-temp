import React from "react";
import { isLoggedIn } from "../utils/auth";
import { useLocation, useNavigate } from "react-router-dom";

const LoginWrapper = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const hasToken = isLoggedIn();
    if (hasToken) return;
    navigate("/login/");
    // eslint-disable-next-line
  }, [location.pathname]);

  return <>{children}</>;
};

export default LoginWrapper;
