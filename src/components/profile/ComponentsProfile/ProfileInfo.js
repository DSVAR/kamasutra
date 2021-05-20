import React from 'react'
import Avatar from "./Avatar";
import Wallpaper from "./Wallpaper";
import Preloader from './../../common/Preloader/Preloader'
import Status from "./Status";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
   
    return (
        <div>
            <Wallpaper />
            <Avatar avatar={props.profile.photos.small}/>
           <Status status={props.status} updateStatus={props.updateStatus} />
        </div>
    );
};

export default ProfileInfo;