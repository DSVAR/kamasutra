const UpdateMessage = 'UPDATE-MESSAGE';
const AddPost = 'ADD-POST';


let initialState={
    post:
        [{ID: '0', Text: 'kuk', Name: 'Ddavar',Img:'https://avatars.mds.yandex.net/get-zen_doc/985972/pub_5d63ef4cf73d9d00adeba678_5d63f06bf73d9d00adeba67e/scale_1200'},
            {ID: '1', Text: 'kuk1', Name: 'Ratatata',Img:'https://i.ytimg.com/vi/iVFmoi6N9B0/maxresdefault.jpg'}],
            textNew: 'Dva'
}

 const profileReducer=(state=initialState,action)=>{

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