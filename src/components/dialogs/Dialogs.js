import React from 'react';
import Classes from './dialog.module.css'
import {NavLink} from "react-router-dom";
import User from "./compontsDialogs/User";
import Message from "./compontsDialogs/Message";



let users=[
    {ID:"1",Name:'DDvar',Url:'https://avatars.mds.yandex.net/get-zen_doc/985972/pub_5d63ef4cf73d9d00adeba678_5d63f06bf73d9d00adeba67e/scale_1200'},
    {ID:'2', Name: "RAtataat",Url:'https://i.ytimg.com/vi/iVFmoi6N9B0/maxresdefault.jpg' }
];

let messages=[
    {Nick:"Me",Message:"Hello"},
    {Nick:"DDvar",Message:"Hi,How are u?"}
]
const Dialogs = (props) => {
    const listUsers=users.map((user)=>
        <User key={user.ID} Name={user.Name} Url={user.Url}/>
    );
    const listMessages=messages.map((mes)=>
        <Message key={mes.Nick} Nick={mes.Nick} Message={mes.Message}/>
    )
    return (
        <div className={Classes.dialogs}>
            <div className={Classes.dialogsUser}>
               {listUsers}
            </div>

            <div className={Classes.messages}>
                {listMessages}
            </div>
        </div>
    );
};

export default Dialogs;

