import React from 'react';
import Classes from "./ComponentsProfile.module.css";

const Post = (props) => {
    return (
        <div className={Classes.PostItem}>
            <p>{props.Name}</p>
            <img src={props.Photourl}/>
            {props.Text}
        </div>
    );
};

export default Post;