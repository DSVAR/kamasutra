import {addPostActionCreator} from "../../../Redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../../Hoc/withAuthRedirect";


let mapStateToProps=(state)=>{
    return{
        posts:state.posts.post
    }//Отдаем props +отслеживаем состояние компонента
}
let mapDispatchToProps=(dispatch)=>{
    return{
        addPost:(text)=>{dispatch(addPostActionCreator(text))}
        
    }//отдаем callbacks
}
export default compose(
    connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(Posts)


