import React from 'react';
import Classes from './dialog.module.css'
import {NavLink} from "react-router-dom";
import User from "./compontsDialogs/User";
import Message from "./compontsDialogs/Message";


const Dialogs = (props) => {

    const listUsers = props.state.users.map(user =>
        <User key={user.ID} ID={user.ID} Name={user.Name} Url={user.Url}/>
    );
    const listMessages = props.state.messages.map(mes =>
        <Message key={mes.ID} Right={mes.Right} Nick={mes.Nick} Message={mes.Message}/>
    )
    let text = React.createRef();


    let mess = () => {
        props.dispatch({type:'ADD-MESSAGE'});
        //props.addMessage(text.current.value);
        //alert();
    }

    let onPostChange=()=>{
        let ter=text.current.value;
        //props.updateText(ter);
        props.dispatch({type:'UPDATE-MESSAGE',text:ter})
    }
    return (

        <div className={Classes.dialogs}>
            <div className={Classes.dialogsUser}>
                {listUsers}
            </div>

            <div className={Classes.messages}>
                {listMessages}
                <textarea onChange={onPostChange} ref={text} value={props.state.newMessage}/>
                <button onClick={mess}>Отправить</button>
            </div>
        </div>
    );
};

export default Dialogs;

