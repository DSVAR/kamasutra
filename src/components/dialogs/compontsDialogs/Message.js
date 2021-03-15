import React from 'react';
import s from '../dialog.module.css'

const Message = (props) => {

    if (props.Right) {
        return (
            <div className={s.messageRight}>
                <p>{props.Nick}:</p>
                {props.Message}
            </div>
        );
    } else {
        return (
            <div className={s.message}>
                <p>{props.Nick}:</p>
                {props.Message}
            </div>
        );
    }

};

export default Message;