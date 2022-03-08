import React,{useState} from 'react';
import './Signup.css';
import Axios from 'axios';
import validation from './validation';

function Signup() {
  
  const [firstReg, setFirstNameReg] = useState('')
  const [lastReg, setLastNameReg] = useState('')
  const [emailReg, setEmailReg] = useState('')
  const [passReg, setPassReg] = useState('')
  const [signStatus, setSignStatus] = useState('')

  const [errors, setErrors] = useState({})

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(firstReg,lastReg,emailReg,passReg));
    if (firstReg && lastReg && emailReg && passReg) {
      register();
    }
  }

  const register = () => {
    Axios.post('http://localhost:5000/register', {
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
      <h2 class="photo"> Create Account </h2>
        <form class ='form-wrapper'>
            <div className="first">
              <div className="label"> First </div>
              <input className='input' 
              type="text"
              onChange={(e)=> {setFirstNameReg(e.target.value)}} />
            </div>
            {errors.first && <p className="error">{errors.first}</p>}
            <div className="last">
              <div className="label"> Last </div>
              <input className='input' type="text" onChange={(e)=> {setLastNameReg(e.target.value)}} />
            </div>
            {errors.last && <p className="error">{errors.last}</p>}
            <div className="email">
              <div className="label"> Email </div>
              <input className='input' type="text" onChange={(e)=> {setEmailReg(e.target.value)}} />
            </div>
            {errors.email && <p className="error">{errors.email}</p>}
            <div className="password">
              <div className="label"> Password </div>
              <input className='input' type="text" onChange={(e)=> {setPassReg(e.target.value)}} />
            </div>
            {errors.password && <p className="error">{errors.password}</p>}
            <button className='submit' onClick={handleFormSubmit}>
              Sign Up
            </button>
            <div className='fixe'>{signStatus}</div>
            <div class="timeAgo">By continuing to use BearTrails, you agree to our Terms of Service and subject to newsletters</div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

