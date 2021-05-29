import React from 'react';
import Post from "./Post";
import {Field, reduxForm} from "redux-form";
import {minLenght, requiredField} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControl/FormsControl";

let minLenght1 = minLenght(5);

const Posts=React.memo((props)=>{
    console.log('Render')
    let posts = props.posts.map(
        post =>
            <Post key={post.id} Photourl={post.Img} Name={post.Name} Text={post.Text}/>
    )


    const addPost = (value) => {
        debugger
        props.addPost(value.PostArea)
    }

    return (

        <div>
            <div>
                <ReduxFormPost onSubmit={addPost}/>
                {posts}
            </div>

        </div>
    );
})


const formPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'PostArea'} component={TextArea}
                   validate={[requiredField, minLenght1]}
            />
            <button>Add post</button>
        </form>
    )
}

const ReduxFormPost = reduxForm({
    form: 'Posts'
})(formPost)


export default Posts;