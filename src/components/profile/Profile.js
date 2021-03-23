import React from 'react';
import Classes from './Profile.module.css'
import Posts from "./ComponentsProfile/Posts";
import Avatar from "./ComponentsProfile/Avatar";
import Wallpaper from "./ComponentsProfile/Wallpaper";

const Profile = (props) => {
    return (
        <div className={Classes.content}>
            <Wallpaper/>
            <Avatar/>
            <Posts
                dispathc={props.dispatch}
                state={props.state}
            />
        </div>
    );
};

export default Profile;