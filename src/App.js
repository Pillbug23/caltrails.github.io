import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import YoutubeBackground from 'react-youtube-background'
import {BrowserRouter as Router,Link,Switch,Route, Routes,Outlet,Navigate,NavLink,useNavigate} from 'react-router-dom';
import Signup from './Components/Navbar/Signup';
import Login from './Components/Navbar/Login';
import Browser from './Components/Trail/Browser';
import Saved from './Components/Navbar/Saved';
import Footer from './Components/Footer/Footer';
import Profile from './Components/Navbar/Profile';
import { useAuth0 } from "@auth0/auth0-react";
import './App.css';

function App() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Router>
    <div className="App">   
      <Navbar></Navbar>     
        <Routes>
          <Route element={
            <>       
            <YoutubeBackground 
            className="intro"
              videoId={"qRTVg8HHzUo"} // 0trXUYYeNHY
              playerOptions={
                {autoplay: 1,
			          controls: 0,
			          rel: 0,
			          showinfo: 0,
			          mute: 1,
			          modestbranding:1,
			          iv_load_policy: 3,
			          playsinline:1,
              }  
            }        
            >
              <h1 className='slogan'>Adventure Awaits</h1>
              <h2 className='slogansub'>Go on and explore now!</h2>
              <Link to={'/Browser'}>
                  <button className='button-40'> Explore now </button>
              </Link>
              </YoutubeBackground>  
              <Footer></Footer>
            </>
          }>
            <Route path='*'/> 
          </Route>
            <Route element={<Outlet />}>
            <Route path='/Profile' element={<Profile />}></Route> 
            <Route path='/Signup' element={<Signup />}></Route> 
            <Route path='/Login' element={<Login />} ></Route>
            <Route path='/Saved' element={<Saved />}></Route>
            <Route path='/Browser' element={<Browser />}></Route>
          </Route>     
        </Routes>
        </div>
      </Router>
    );
  }

export default App;

