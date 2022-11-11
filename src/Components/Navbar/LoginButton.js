import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./button.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="button-40" onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
};

export default LoginButton;
