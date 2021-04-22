import {updateNewMessageActionCreator,addPostActionCreator} from "../../../Redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";


let mapStateToProps=(state)=>{
    return{
        posts:state.posts.post,
        textNew:state.posts.textNew
    }//Отдаем props +отслеживаем состояние компонента
}
let mapDispatchToProps=(dispatch)=>{
    return{
        updateText:(text)=>{  dispatch(updateNewMessageActionCreator(text))
        },
        
        addPost:()=>{dispatch(addPostActionCreator())}
        
    }//отдаем callbacks
}
const  PostsContainer=connect(mapStateToProps,mapDispatchToProps)(Posts)


export default PostsContainer;