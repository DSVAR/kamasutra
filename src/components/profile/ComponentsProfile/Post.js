import React from 'react';
import Classes from "./ComponentsProfile.module.css";

const Post = (props) => {
    return (
        <div className={Classes.PostItem}>
            <img src={props.photourl}/>
            {props.message}
        </div>
    );
};

export default Post;