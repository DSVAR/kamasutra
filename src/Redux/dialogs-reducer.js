
const AddMessage = 'ADD-MESSAGE';


let initialState={
    users: [
        {
            ID: '0',
            Name: 'DDvar',
            Url: 'https://avatars.mds.yandex.net/get-zen_doc/985972/pub_5d63ef4cf73d9d00adeba678_5d63f06bf73d9d00adeba67e/scale_1200'
        },
        {ID: '1', Name: "RAtataat", Url: 'https://i.ytimg.com/vi/iVFmoi6N9B0/maxresdefault.jpg'}
    ],
    messages: [
        {ID: 0, Nick: "Me", Message: "Hello", Right: true},
        {ID: 1, Nick: "DDvar", Message: "Hi,How are u?", Right: false}
    ],
    newMessage: 'ItDava'
}


 const dialogcReducer=(state=initialState,action)=>{
     
    switch (action.type) {
        case AddMessage: {
            debugger
            let MessageNew = {
                ID: 2,
                Message:action.message,
                Nick: "Me",
                Right: true
            };
            
            return{...state, 
            messages: [...state.messages,MessageNew]};
           // stateCopy.messages.push(MessageNew);          
        }

       
        default:  return state;
    }
}




export const addMessageActionCreator = (message) => ({type: AddMessage, message})

export default dialogcReducer;