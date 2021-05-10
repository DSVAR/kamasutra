import React from 'react';
import Classes from './Header.module.css';
import Logo from "./HeaderComponents/Logo";
import {NavLink} from "react-router-dom";

const Header=(props)=>{
    debugger;
    return(
        <header className={Classes.header}>
            <div>
                {props.isAuth ?  props.login :
                <NavLink className={Classes.loginBlock} to={'/login'}>Login</NavLink> }
                 <Logo/>            
               
            </div>
        </header>
    )
}
export default Header;