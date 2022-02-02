import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import ImageSlider from './Components/Slideshow/ImageSlider';
import Local from './Components/Local/Local';
import Category from './Components/Category/Category';
import pic from './bridge2.jpg';
import Stats from './Components/Stats/stats';
import Footer from './Components/Footer/Footer';
import SearchBar from './Components/Search/SearchBar';
import {BrowserRouter as Router, Route, Routes,Outlet,Navigate} from 'react-router-dom';
import Signup from './Components/Navbar/Signup';
import Login from './Components/Navbar/Login';
import Browser from './Components/Trail/Browser';
import Saved from './Components/Navbar/Saved';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">   
      <Navbar></Navbar>
        <Routes>
          <Route element={
            <>
            <Outlet />
            <ImageSlider></ImageSlider>      
            <SearchBar placeholder=" Backend not supported on github, attending heroku..."></SearchBar>           
            <Local></Local>           
            <Category></Category>           
            <img className='shape' style={{top: '860px'}} src={pic}></img>           
            <div className='bay'> Bay Area</div>
            <div className='bay2'>Explore with confidence</div>
            <div className='bay3'>With its iconic bridge, historic cable cars, and beautiful Victorian 
              architecture, San Francisco is undeniably one of the world’s great cities. 
              The entire region, in fact, demands to be explored. The vibrant and diverse 
              East Bay, with cities like Oakland and Berkeley, is a cultural and culinary 
              hotbed. Napa Valley and Sonoma County produce some of the best wine in the world. 
              San Jose, and the Silicon Valley, is an essential hub of innovation. Plus, 
              you’ll find quaint waterfront towns, incredible shopping, fantastic museums, 
              and endless outdoor delights at Point Reyes National Seashore.</div>
            <Stats></Stats>
          <Footer></Footer>
            </>
          }>
            <Route path='*'/> 
          </Route>
            <Route element={<Outlet />}>
            <Route path='/Signup' element={<Signup />}></Route> 
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/Saved' element={<Saved />}></Route>
            <Route path='/Browser' element={<Browser />}></Route>
          </Route>     
        </Routes>
        </div>
      </Router>
    );
  }

export default App;

