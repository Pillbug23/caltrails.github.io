import React from "react";
import logo from './gifPath.gif'

export const PleaseLogin = () => {
    return (
        <div className="background">
            <h1>Profile</h1>
            <img src={logo} alt="loading..." />
            <p>
            You are not logged into your account. Please log in.
            </p>
        </div>
    );
  };
  
  export default PleaseLogin;