import {updateNewMessageActionCreator,addPostActionCreator} from "../../../Redux/profile-reducer";
import Posts from "./Posts";
import StoreContext from "../../../Store-Context";


const PostsContainer = (props) => {

    return (
        <StoreContext.Consumer> 
            {
            (Store)=>
            {
                let state=Store.getState();
               let clickContainer=()=>{
                   Store.dispatch(addPostActionCreator())

                }

                let onPostChangeContainer=(text)=>{

                    Store.dispatch(updateNewMessageActionCreator(text))
                }
            return <Posts updateText={onPostChangeContainer}
               addPost={clickContainer} posts={state.posts.post}
               textNew={state.posts.textNew}/>
            }
        }
        </StoreContext.Consumer>
        );
};

export default PostsContainer;