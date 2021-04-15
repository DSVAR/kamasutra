import React from 'react';
import Classes from './dialog.module.css'
import {NavLink} from "react-router-dom";
import User from "./compontsDialogs/User";
import Message from "./compontsDialogs/Message";
import {
    addMessageActionCreator, updateInNewMessageActionCreator
} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {

    let state=props.store.getState();
debugger;

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onPostChange=(body)=>{
        props.dispatch(updateInNewMessageActionCreator(body))
    }

    return  (<Dialogs changeText={onPostChange} addMess={addMessage}
                      newMessage={props.state.newMessage} state={state.dialogs} />);
};

export default DialogsContainer;

