import React from 'react';
import { MenuItems } from "./MenuItems";
import logo from './logo.png';
import './Navbar.css';
import {NavLink} from "react-router-dom";
import AuthenticationButton from "./Authentication";

class Navbar extends React.Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
        
    }

    render() {
        return(
            <nav className="NavbarItems">
                <div className="container">
                    <div className="menu-icon">
                        <img src={logo} width = "50" height="50"/>
                    </div>

                    <NavLink to={'/'} activeClassName="navbar-logo" className={'navbar-logo'} >
                        BearTrails
                    </NavLink>
                </div>

                <div className='container2'>
                <ul className='nav-menu'>
                    {MenuItems.map((item,index) => {
                        return (
                            <li key={index}>
                                 <NavLink to={item.url} activeClassName="is-active" className={item.cName} style={{position: 'relative', right: 0, top: 13}}>
                                     {item.title}
                                 </NavLink>
                            </li>
                        )
                    })}
                </ul>
                <div className="container3">
                    <AuthenticationButton/>
                </div>
                </div>
            </nav>
        )
    }
}

export default Navbar