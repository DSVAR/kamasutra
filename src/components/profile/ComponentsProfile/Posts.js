import React from 'react';
import Classes from './ComponentsProfile.module.css'
import Post from "./Post";

const Posts = () => {
    return (
        <div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Post/>

        </div>
    );
};

export default Posts;