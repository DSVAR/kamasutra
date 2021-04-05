

const UpdateTextMessage='UPDATE-TEXT-MESSAGE';
const AddMessage = 'ADD-MESSAGE';

 const dialogcReducer=(state,action)=>{

    switch (action.type) {
        case AddMessage: {
            let MessageNew = {
                ID: 2,
                Message:state.newMessage,
                Nick: "Me",
                Right: true
            };

            state.messages.push(MessageNew);
            state.newMessage = '';
            return state;
        }

        case UpdateTextMessage:{
            state.newMessage = action.text;
            return state;
        }
        default:  return state;
    }
}


export const updateInNewMessageActionCreator=(newMessage)=>({
    type: UpdateTextMessage,
    text: newMessage
})


export const addMessageActionCreator = () => ({type: AddMessage})

export default dialogcReducer;