import React from 'react';
import Classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./NavComponents/Friends";
import StoreContext from "../../Store-Context";

const Navbar = (props) => {

    return (
        <StoreContext.Consumer>{
            (Store)=>{

                let state=Store.getState();
                const friend=state.sidebar.friends.map(friend=>
                    <Friends Url={friend.Url} />);

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

                    <div className={Classes.friends}>
                        {friend}
                    </div>
                </nav>
             )
            }
        }
        </StoreContext.Consumer>
    );
};

export default Navbar;