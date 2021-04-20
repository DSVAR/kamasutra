import React from 'react';
import Classes from './dialog.module.css'
import {NavLink} from "react-router-dom";
import User from "./compontsDialogs/User";
import Message from "./compontsDialogs/Message";
import {
    addMessageActionCreator, updateInNewMessageActionCreator
} from "../../Redux/dialogs-reducer";



const Dialogs = (props) => {

    let state= props.state;

    const listUsers = state.users.map(user =>
        <User key={user.ID} ID={user.ID} Name={user.Name} Url={user.Url}/>
    );
    const listMessages =state.messages.map(mes =>
        <Message key={mes.ID} Right={mes.Right} Nick={mes.Nick} Message={mes.Message}/>
    )



    let mess = () => {
        props.addMess();
        //props.addMessage(text.current.value);
        //alert();
    }

    let onPostChange=(e)=>{
        
        let body=  e.target.value;
        props.changeText(body);
    }
    return (

        <div className={Classes.dialogs}>
            <div className={Classes.dialogsUser}>
                {listUsers}
            </div>

            <div className={Classes.messages}>
                {listMessages}
                <textarea onChange={onPostChange} value={props.newMessage}/>
                <button onClick={mess}>Отправить</button>
            </div>
        </div>
    );
};

export default Dialogs;

