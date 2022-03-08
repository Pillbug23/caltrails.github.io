import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className='button-64' onClick={() => logout({ returnTo: 'https://pillbug23.github.io/caltrails.github.io/'})}>
      Log Out
    </button>
  );
};

export default LogoutButton;