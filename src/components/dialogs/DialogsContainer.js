import React from 'react';
import Classes from './dialog.module.css'
import {NavLink} from "react-router-dom";
import User from "./compontsDialogs/User";
import Message from "./compontsDialogs/Message";
import {
    addMessageActionCreator, updateInNewMessageActionCreator
} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../Store-Context";



const DialogsContainer = (props) => {
    return  (
        <StoreContext.Consumer>{
            (Store)=>{
                let state=Store.getState();
                let addMessage = () => {
                    Store.dispatch(addMessageActionCreator());
                }

                let onPostChange=(body)=>{
                    Store.dispatch(updateInNewMessageActionCreator(body))
                }
            return <Dialogs changeText={onPostChange} addMess={addMessage}
                      newMessage={state.dialogs.newMessage} state={state.dialogs} />
            }}
        </StoreContext.Consumer>
                      );
};

export default DialogsContainer;

