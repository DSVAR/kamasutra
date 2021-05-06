const UpdateMessage = 'UPDATE-MESSAGE';
const AddPost = 'ADD-POST';
const SET_USER_PROFILE="SET_USER_PROFILE";

let initialState={
    post:
        [{ID: '0', Text: 'kuk', Name: 'Ddavar',Img:'https://avatars.mds.yandex.net/get-zen_doc/985972/pub_5d63ef4cf73d9d00adeba678_5d63f06bf73d9d00adeba67e/scale_1200'},
        {ID: '1', Text: 'kuk1', Name: 'Ratatata',Img:'https://i.ytimg.com/vi/iVFmoi6N9B0/maxresdefault.jpg'}],
   textNew: 'Dva',
   profile:null
}

 const profileReducer=(state=initialState,action)=>{
     let stateCopy={};
     debugger;
     switch (action.type) {
     
        case UpdateMessage: {
            return{
                ...state,
                textNew: action.text
            }
        }
        case AddPost: {

            let postNew = {
                ID: 3,
                Text: state.textNew,
                Name: "Ratatata",
                Img:'https://i.ytimg.com/vi/iVFmoi6N9B0/maxresdefault.jpg'
            };
            return{
                ...state,
                post:[...state.post,postNew],
                textNew:''                
            }
       
        }
       
        case SET_USER_PROFILE:{           
            return{
                ...state,
                profile:action.profile
            }
        }
        default:   return state;

    }



}

export const updateNewMessageActionCreator = (message) => ({
    type: UpdateMessage,
    text: message
})
export const addPostActionCreator=()=>({type: AddPost})
export const setUsersProfile=(profile)=>( {type:SET_USER_PROFILE, profile})
export default profileReducer;