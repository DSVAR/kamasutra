import {updateNewMessageActionCreator,addPostActionCreator} from "../../../Redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";


let mapStateToProps=(state)=>{
    return{
        posts:state.posts.post,
        textNew:state.posts.textNew
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        updateText:()=>{dispatch(addPostActionCreator())
        },
        addPost:(text)=>{dispatch(updateNewMessageActionCreator(text))}
        
    }
}
const  PostsContainer=connect(mapStateToProps,mapDispatchToProps)(Posts)


export default PostsContainer;