import React from 'react';
import Classes from './Profile.module.css'
import PostsContainer from "./ComponentsProfile/PostsContainer";
import ProfileInfo from './ComponentsProfile/ProfileInfo'
import {Redirect} from "react-router-dom";

const Profile = (props) => {
   
  return (
        <div className={Classes.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <PostsContainer/>
        </div>
    );
};

export default Profile;