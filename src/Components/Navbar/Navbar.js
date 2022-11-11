import React from "react";
import { MenuItems } from "./MenuItems";
import logo from "./logo.png";
import "./Navbar.css";
import useStyles from "./Navbarstyles.js";
import { NavLink } from "react-router-dom";
import { Toolbar, Typography, AppBar } from "@material-ui/core";
import AuthenticationButton from "./Authentication";

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <NavLink to={"/"}>
          <Typography variant="h5" className={classes.title}>
            <img src={logo} alt="logo" width="55" height="55" />
          </Typography>
        </NavLink>

        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={item.url}
                  activeClassName="is-active"
                  className={item.cName}
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
          <AuthenticationButton></AuthenticationButton>
        </ul>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
