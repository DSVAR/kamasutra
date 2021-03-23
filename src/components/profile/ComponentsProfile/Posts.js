import React from 'react';
import Classes from './ComponentsProfile.module.css'
import Post from "./Post";

const Posts = (props) => {

    let posts=props.state.post.map(
        post=>
    <Post key={post.id} img={post.Img} Name={post.Name} Text={post.Text} />
    )

    let reg= React.createRef();

    let click=()=>{
        alert(reg.current.value);

    }

    return (

        <div>
            <div>
                <textarea ref={reg}></textarea>
                <button onClick={click}>Add post</button>
                <button>Remove</button>
                {posts}
            </div>

        </div>
    );
};

export default Posts;