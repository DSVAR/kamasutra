import React from 'react';
import Classes from './ComponentsProfile.module.css'
import Post from "./Post";
import {updateNewMessageActionCreator,addPostActionCreator} from "../../../Redux/State";

const Posts = (props) => {

    let posts=props.state.post.map(
        post=>
    <Post key={post.id} Photourl={post.Img} Name={post.Name} Text={post.Text}  />
    )

    let reg= React.createRef();

    let click=()=>{
        //alert(reg.current.value);
        props.dispathc(addPostActionCreator())
    }

    let onPostChange=()=>{
        let text=reg.current.value;
        props.dispathc(updateNewMessageActionCreator(text))
    }

    return (

        <div>
            <div>
                <textarea value={props.state.textNew} ref={reg } onChange={onPostChange} ref={reg}></textarea>
                <button onClick={click}>Add post</button>
                <button>Remove</button>
                {posts}
            </div>

        </div>
    );
};

export default Posts;