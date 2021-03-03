import React from 'react';
import s from "../dialog.module.css"
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div className={s.dialogsUser}>
            <img src={props.Url} />
            <NavLink to={"/dialogs/"+props.ID} >{props.Name}</NavLink>
        </div>
    );
};

export default User;