import React from 'react';
import { MenuItems } from "./MenuItems";
import logo from './logo.png';
import './Navbar.css';
import {NavLink} from "react-router-dom";


class Navbar extends React.Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
        
    }

    render() {
        return(
            <nav className="NavbarItems">

                <div className="menu-icon">
                    <img src={logo} height={32} width={39} />
                </div>
                
                <h1 className="navbar-logo">Calbear Trails</h1>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
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
            </nav>
        )
    }
}

export default Navbar