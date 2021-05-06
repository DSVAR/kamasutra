import React from 'react';
import Classes from './Profile.module.css'
import PostsContainer from "./ComponentsProfile/PostsContainer";
import ProfileInfo from './ComponentsProfile/ProfileInfo'

const Profile = (props) => {
    debugger
    return (
        <div className={Classes.content}>
            <ProfileInfo profile={props.profile} />
            <PostsContainer/>
        </div>
    );
};

export default Profile;