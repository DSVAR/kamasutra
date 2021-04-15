import React from 'react';
import Classes from './ComponentsProfile.module.css'
import Post from "./Post";
import {updateNewMessageActionCreator,addPostActionCreator} from "../../../Redux/profile-reducer";

const Posts = (props) => {

    let posts=props.posts.map(
        post=>
    <Post key={post.id} Photourl={post.Img} Name={post.Name} Text={post.Text}  />
    )

    let reg= React.createRef();

    let click=()=>{
        //alert(reg.current.value)
       props.addPost()
    }

    let onPostChange=()=>{
        let text=reg.current.value;
        props.updateText(text);
    }

    return (

        <div>
            <div>
                <textarea value={props.textNew} ref={reg } onChange={onPostChange} ref={reg}></textarea>
                <button onClick={click}>Add post</button>
                <button>Remove</button>
                {posts}
            </div>

        </div>
    );
};

export default Posts;