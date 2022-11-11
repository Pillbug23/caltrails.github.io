import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Signup from "./Components/Navbar/Signup";
import Browser from "./Components/Trail/Browser";
import Saved from "./Components/Navbar/Saved";
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/Navbar/Profile";
import { CssBaseline, Grid } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <CssBaseline />
        <Navbar></Navbar>
        <Routes>
          <Route
            element={
              <>
                <Grid container style={{ width: "100%" }}>
                  <Grid item xs={12}>
                    <div className="home">
                      <h1 className="slogan">Adventure Awaits</h1>
                      <h2 className="slogansub">Go on and explore now!</h2>
                      <Link to={"/Browser"}>
                        <button className="button-40"> Explore now </button>
                      </Link>
                    </div>
                  </Grid>
                </Grid>
              </>
            }
          >
            <Route path="*" />
          </Route>
          <Route element={<Outlet />}>
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/Saved" element={<Saved />}></Route>
            <Route path="/Browser" element={<Browser />}></Route>
          </Route>
        </Routes>
      </div>
      <Grid container style={{ width: "100%" }}>
        <Grid item xs={12} md={12}>
          <Footer></Footer>
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
