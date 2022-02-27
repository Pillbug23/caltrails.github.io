import React, {useState} from 'react';
import style from './Login.css';
import Axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";

const Signup = () => {
  const [emailReg, EmailReg] = useState('')
  const [passReg, PassReg] = useState('')
  const [LoginStatus, setLoginStatus] = useState('')
  
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated } = useAuth0();
  const [Logged, isLogged] = useState("");
  const [textColor, setTextColor] = useState('black');
  const [textColor2, setTextColor2] = useState('black');

  const highlight2 = () => {
    setTextColor2('#FE4880');
    setTextColor('black');
  }

  const highlight = () => {
    setTextColor('#FE4880');
    setTextColor2('black');
  }

  const login = () => {
    Axios.post('http://localhost:5000/login', {
      email: emailReg,
      password: passReg,
    }).then((response)=> {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].email);
      }
    });
  };

  return (
    <div className="Login">    
      <div className='Log'>
      <div class="photon"> Sign into your account</div>
        <div class ='searched'>
          <div className='display'style={{ color:textColor2}}>Email:</div>
            <div className="searchInputsed" onClick ={highlight2}>
              <input type="text" onChange={(e)=> {EmailReg(e.target.value)}} />
            </div>
        </div>
        <div class ='searched'>
        <div className='display' style={{ color:textColor}} >Password:</div>
          <div className="searchInputsed" onClick ={highlight}>
                    <input type="text" onChange={(e)=> {PassReg(e.target.value)}} />
                    <div className="searchIconed"></div>
                </div>
        </div>
        <div className='fix'>{LoginStatus}</div>
        <button className='button-40' style = {{padding: 20,marginBottom: '50px',marginTop: '-30px'}} onClick={login}>
          Log In
        </button>
        <span className='line'></span>
        <div class="photon"> Sign in w/ authentication</div>
        <button className='button-36' onClick={() =>
        loginWithRedirect({screen_hint: 'signup',})}
        style={{ padding: 20, marginBottom: "30px" }}>
          Log In
        </button>
        <button className='button-36' 
        onClick={() =>
        logout({returnTo: window.location.origin,})}
        style={{ padding: 20}}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Signup;

