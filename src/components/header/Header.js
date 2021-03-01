import React from 'react';
import Classes from './Header.module.css';
import Logo from "./HeaderComponents/Logo";

const Header=()=>{
    return(
        <header className={Classes.header}>
            <Logo/>
        </header>
    )
}
export default Header;