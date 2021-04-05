const UpdateMessage = 'UPDATE-MESSAGE';
const AddPost = 'ADD-POST';

 const profileReducer=(state,action)=>{

    switch (action.type) {

        case UpdateMessage: {
            state.textNew=action.text;
            return state;
        }
        case AddPost: {

            let postNew = {
                ID: 2,
                Text: state.textNew,
                Name: "Ratatata",
                Img:'https://i.ytimg.com/vi/iVFmoi6N9B0/maxresdefault.jpg'
            };
            state.post.push(postNew);
            state.textNew=''
            return state;
        }
        default:   return state;

    }



}

export const updateNewMessageActionCreator = (message) => ({
    type: UpdateMessage,
    text: message
})
export const addPostActionCreator=()=>({type: AddPost})
export default profileReducer;