import React from 'react';
import Classes from './dialog.module.css'
import {NavLink} from "react-router-dom";
import User from "./compontsDialogs/User";
import Message from "./compontsDialogs/Message";
import {
    addMessageActionCreator, updateInNewMessageActionCreator
} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapDialogsToProps=(state)=>{
    return{
        state:state.dialogs,
        newMessage:state.dialogs.newMessage
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        addMess:()=>{  dispatch(addMessageActionCreator())},
        changeTet:(body)=>{dispatch(updateInNewMessageActionCreator(body))}
    }
}

const DialogsContainer=connect(mapDialogsToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;

