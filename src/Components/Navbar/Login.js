import React, {useState} from 'react';
import style from './Login.css';
import Axios from 'axios';

function Signup() {
  const [emailReg, EmailReg] = useState('')
  const [passReg, PassReg] = useState('')
  const [LoginStatus, setLoginStatus] = useState('')

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
      <div class="photon"> Log in and get moving</div>
        <div class ='searched'>
          <div className="searchInputsed">
                    <input type="text" onChange={(e)=> {EmailReg(e.target.value)}} placeholder={'Email'}/>
                    <div className="searchIconed"></div>
                </div>
                <div className="dataResult"></div>
        </div>
        <div class ='searched'>
          <div className="searchInputsed">
                    <input type="text" onChange={(e)=> {PassReg(e.target.value)}} placeholder={'Password'}/>
                    <div className="searchIconed"></div>
                </div>
                <div className="dataResult"></div>
        </div>
        <div className='fix'>{LoginStatus}</div>
        <button className='searcheed' onClick={login}>
          Log In
        </button>
        <div className='forgot'> Forgot your password? </div>
        <span className='line'></span>
        <button class="info">Login with Google</button>
        <button class="info2">Login with Facebook</button>
        <button class="info3">Login with Apple</button>
        <div class="timeAgog">By continuing to use BearTrails, you agree to sign your life away and agree to our Terms of Service</div>
        <div class='donthave'>Need an account? Sign Up Here</div>
      </div>
    </div>
  );
}

export default Signup;

