import {updateNewMessageActionCreator,addPostActionCreator} from "../../../Redux/profile-reducer";
import Posts from "./Posts";

const PostsContainer = (props) => {



    let clickContainer=()=>{
        //alert(reg.current.value);
        props.dispathc(addPostActionCreator())
    }

    let onPostChangeContainer=(text)=>{

        props.dispathc(updateNewMessageActionCreator(text))
    }

    return (
        <Posts updateText={onPostChangeContainer} addPost={clickContainer} posts={props.state.post} textNew={props.state.textNew}/>
    );
};

export default PostsContainer;