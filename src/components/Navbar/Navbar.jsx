import React from 'react';
import { NavLink } from 'react-router-dom';
import navbar from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={navbar.nav}>
            <div className={navbar.item}>
                <NavLink to="/profile" activeClassName={navbar.activeLink}>Profile</NavLink>
            </div>
            <div className={`${navbar.item} ${navbar.active}`}>
                <NavLink to="/dialogs" activeClassName={navbar.activeLink}>Messages</NavLink>
            </div>
            <div className={`${navbar.item} ${navbar.active}`}>
                <NavLink to="/users" activeClassName={navbar.activeLink}>Users</NavLink>
            </div>
            <div className={navbar.item}>
                <NavLink to="/#"> News</NavLink>
            </div>
            <div className={navbar.item}>
                <NavLink to="/#"> Music</NavLink>
            </div>
            <div className={navbar.item}>
                <NavLink to="/#"> Settings</NavLink>
            </div>
        </nav>);
}

export default Navbar;