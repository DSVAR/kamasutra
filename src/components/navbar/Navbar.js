import React from 'react';
import Classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./NavComponents/Friends";

const Navbar = (props) => {
    let imgFriend=props.state.friends.map(
        Img=><Friends key={Img.Id} Url={Img.Url} />)
    
    return (        
                <nav className={Classes.nav}>
                    <div className={Classes.item}>
                        <NavLink  to="/profile" activeClassName={Classes.active}>Profile</NavLink>
                    </div>

                    <div className={Classes.item}>
                        <NavLink  to="/dialogs" activeClassName={Classes.active}>Message</NavLink>
                    </div>

                    <div className={Classes.item}>
                        <NavLink  to="/users" activeClassName={Classes.active}>Users</NavLink>
                    </div>
                    <div className={Classes.item}>
                        <NavLink to=""  >News</NavLink>
                    </div>

                    <div className={Classes.item}>
                        <NavLink to="">Setting</NavLink>
                    </div>

                    <div className={Classes.friends}>
                        {imgFriend}
                    </div>
                </nav>        
    );
};


export default Navbar;