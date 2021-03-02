import React from 'react';
import Classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={Classes.nav}>
            <div className={Classes.item}>
                <a href="/profile">Profile</a>
            </div>

            <div className={Classes.item}>
                <a href="/dialogs">Message</a>
            </div>

            <div className={Classes.item}>
                <a>News</a>
            </div>

            <div className={Classes.item}>
                <a>Setting</a>
            </div>

        </nav>
    );
};

export default Navbar;