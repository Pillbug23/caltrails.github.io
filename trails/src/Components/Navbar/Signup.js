import React,{useState} from 'react';
import style from './Signup.css';
import Axios from 'axios';

function Signup() {
  
  const [firstReg, setFirstNameReg] = useState('')
  const [lastReg, setLastNameReg] = useState('')
  const [emailReg, setEmailReg] = useState('')
  const [passReg, setPassReg] = useState('')
  const [signStatus, setSignStatus] = useState('')

  const register = () => {
    Axios.post('http://localhost:3001/register', {
      first_name: firstReg,
      last_name: lastReg,
      email: emailReg,
      password: passReg,
    }).then((response)=> {
      console.log(response);
      setSignStatus(response.data.message);
    });
  };

  return (
    <div className="Signup">    
      <div className='Sign'>
      <div class="photo"> Create an account</div>
        <button class="info">Login with Google</button>
        <button class="info2">Login with Facebook</button>
        <button class="info3">Login with Apple</button>
        <span className='linee'></span>
        <div class ='searche'>
          <div className="searchInputse">
                    <input type="text" onChange={(e)=> {setFirstNameReg(e.target.value)}} placeholder={'First name'} />
                    <div className="searchIcone"></div>
                </div>
                <div className="dataResult"></div>
        </div>
        <div class ='searche'>
          <div className="searchInputse">
                    <input type="text" onChange={(e)=> {setLastNameReg(e.target.value)}} placeholder={'Last name'}/>
                    <div className="searchIcone"></div>
                </div>
                <div className="dataResult"></div>
        </div>
        <div class ='searche'>
          <div className="searchInputse">
                    <input type="text" onChange={(e)=> {setEmailReg(e.target.value)}} placeholder={'Email'}/>
                    <div className="searchIcone"></div>
                </div>
                <div className="dataResult"></div>
        </div>
        <div class ='searche'>
          <div className="searchInputse">
                    <input type="text" onChange={(e)=> {setPassReg(e.target.value)}} placeholder={'Password'}/>
                    <div className="searchIcone"></div>
                </div>
                <div className="dataResult"></div>
        </div>
        <button className='searchee'  onClick={()=>{register()}}>
          Sign Up
        </button>
        <div className='fixe'>{signStatus}</div>
        <div class="timeAgo">By continuing to use BearTrails, you agree to sign your life away and agree to our Terms of Service</div>
      </div>
    </div>

  );
}

export default Signup;

