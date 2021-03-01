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
            <Post photourl="https://i.pinimg.com/originals/bf/75/9b/bf759b9beeecf5be32f514aa94b23705.jpg" message="Pisun"/>
            <Post photourl="https://steamuserimages-a.akamaihd.net/ugc/784123877859907552/4A76FF0BA2ABA14FA73D5D291E493C8D11535D9E/?imw=512&amp;imh=409&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true" message="davar"/>
        </div>
    );
};

export default Posts;