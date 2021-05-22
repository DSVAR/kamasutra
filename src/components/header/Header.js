import React from 'react';
import Classes from './Header.module.css';
import Logo from "./HeaderComponents/Logo";
import {NavLink} from "react-router-dom";


const Header=(props)=>{

    
    const logout=()=>{
        props.logouting();
    }
    return(
        <header className={Classes.header}>
            <div>
                {props.isAuth ?  props.login :
                <NavLink className={Classes.loginBlock} to={'/login'}>Login</NavLink> }
                {props.isAuth ?
                <button onClick={logout}>logout</button> :null}
                 <Logo/>            
               
            </div>
        </header>
    )
}
export default Header;