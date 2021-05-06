import React from 'react'
import Avatar from "./Avatar";
import Wallpaper from "./Wallpaper";
import Preloader from './../../common/Preloader/Preloader'

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <Wallpaper />
            <Avatar avatar={props.profile.photos.small}/>
           
        </div>
    );
};

export default ProfileInfo;