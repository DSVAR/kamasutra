import React from 'react';
import Classes from './dialog.module.css'
import {Redirect} from 'react-router-dom';
import {NavLink} from "react-router-dom";
import User from "./compontsDialogs/User";
import Message from "./compontsDialogs/Message";
import {Field, reduxForm} from "redux-form";
import {Input, TextArea} from "../common/FormsControl/FormsControl";
import {minLenght, requiredField} from "../../utils/validators/validators";

const minLenght1=minLenght(5);

const Dialogs = (props) => {

    let state= props.state;

    const listUsers = state.users.map(user =>
        <User key={user.ID} ID={user.ID} Name={user.Name} Url={user.Url}/>
    );
    const listMessages =state.messages.map(mes =>
        <Message key={mes.ID} Right={mes.Right} Nick={mes.Nick} Message={mes.Message}/>
    )



    
    const addNewMessage=(value)=>{
        props.addMess(value.message);
    }
    if (!props.isAuth)  return <Redirect to={"/login"}/>;
     
   
        return (
    
            <div className={Classes.dialogs}>
                <div className={Classes.dialogsUser}>
                    {listUsers}
                </div>
    
                <div className={Classes.messages}>
                    {listMessages}
                    <ReduxLoginForm  onSubmit={addNewMessage}/>
                </div>
            </div>
        );
     
};

const MessagesForm=(props)=>{
    
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  name={'message'} placeholder={'piska'} component={Input}  validate={[requiredField, minLenght1]}/>
            </div>
            <div>
                <button >Отправить</button>
            </div>
        </form>
    )
}

const ReduxLoginForm=reduxForm({
    form:'Messages'
})(MessagesForm)



export default Dialogs;

