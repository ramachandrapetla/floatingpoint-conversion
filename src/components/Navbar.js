import { useState } from 'react';
import './Navbar.css'
import {NavLink} from "react-router-dom";
import React from "react";

const NavBar = () => {
    const [active, setActive] = useState(true);

    const setConversion = (e) => {
        console.log(e.target)
        setActive(true);
    }
    const setOperations = (e) => {
        setActive(false);
    }
    return (
        <header className='navbar'>
            <div className='navbar__title navbar__item'>Floating Point Conversion</div>
            <div className={`navbar__item menu-item ${active ? 'active' : ''}`} onClick={setConversion}>
                <NavLink  to="/conversion" activeClassName='buffon'>Conversion</NavLink>
            </div>
            <div className={`navbar__item menu-item ${active ? '' : 'active'}`} onClick={setOperations}>
                <NavLink  to="/operations" activeClassName='buffon'>Operations</NavLink>
            </div>
        </header>
    )
}
export default NavBar;