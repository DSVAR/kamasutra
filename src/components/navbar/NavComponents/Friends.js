import React from 'react';
import s from '../Navbar.module.css'

const Friends = (props) => {
    return (
        <div className={s.friendPhoto}>
            <img src={props.Url}/>
        </div>
    );
};

export default Friends;