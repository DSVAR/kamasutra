import {updateNewMessageActionCreator,addPostActionCreator} from "../../../Redux/profile-reducer";
import Posts from "./Posts";
import StoreContext from "../../../Store-Context";

const PostsContainer = (props) => {



    let clickContainer=()=>{
        //alert(reg.current.value);
        props.dispathc(addPostActionCreator())
    }

    let onPostChangeContainer=(text)=>{

        props.dispathc(updateNewMessageActionCreator(text))
    }

    return (
        <StoreContext.Consumer>
        <Posts updateText={onPostChangeContainer} 
               addPost={clickContainer} posts={props.state.post} 
               textNew={props.state.textNew}/>
        </StoreContext.Consumer>
        );
};

export default PostsContainer;