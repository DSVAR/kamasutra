import React from 'react';
import Classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={Classes.nav}>
            <div className={Classes.item}>
                <NavLink  to="/profile" activeClassName={Classes.active}>Profile</NavLink>
            </div>

            <div className={Classes.item}>
                <NavLink  to="/dialogs" activeClassName={Classes.active}>Message</NavLink>
            </div>

            <div className={Classes.item}>
                <NavLink to=""  >News</NavLink>
            </div>

            <div className={Classes.item}>
                <NavLink to="">Setting</NavLink>
            </div>

        </nav>
    );
};

export default Navbar;