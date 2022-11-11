import React from "react";
import AuthenticationButton from "./Authentication";

export const PleaseLogin = () => {
  return (
    <div style={{ textAlign: "center", paddingBottom: 544, paddingTop: 100 }}>
      <h1> This is a page that cannot be accessed.</h1>
      <h2> Please Log In</h2>
      <AuthenticationButton></AuthenticationButton>
    </div>
  );
};

export default PleaseLogin;
