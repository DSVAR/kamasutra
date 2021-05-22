import React from 'react';
import {
    addMessageActionCreator, updateInNewMessageActionCreator
} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";



let mapDialogsToProps=(state)=>{
    return{
        state:state.dialogs,
        newMessage:state.dialogs.newMessage
    }//Отдаем props +отслеживаем состояние компонента
}
let mapDispatchToProps=(dispatch)=>{
    return{
        addMess:(message)=>{  dispatch(addMessageActionCreator(message))}
    }//отдаем callbacks
}


export default compose(
    connect(mapDialogsToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


