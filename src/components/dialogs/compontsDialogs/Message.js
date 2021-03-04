import React from 'react';
import s from '../dialog.module.css'

const Message = (props) => {
    return (
        <div className={s.message}>
            <p>{props.Nick}</p>
            {props.Message}
        </div>
    );
};

export default Message;