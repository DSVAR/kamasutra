import React from 'react';
import Classes from './Profile.module.css'
import Posts from "./ComponentsProfile/Posts";
import Avatar from "./ComponentsProfile/Avatar";
import Wallpaper from "./ComponentsProfile/Wallpaper";

const Profile = () => {
    return (
        <div className={Classes.content}>
            <Wallpaper/>
            <Avatar/>
            <Posts/>
        </div>
    );
};

export default Profile;