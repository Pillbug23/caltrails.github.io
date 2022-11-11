import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Information.css";

const Information = () => {
  const { user } = useAuth0();

  const { name, picture, email } = user;

  return (
    <div styles={{ paddingTop: 30 }}>
      <div>
        <div>
          <img src={picture} alt="Profile" />
        </div>
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Information;
