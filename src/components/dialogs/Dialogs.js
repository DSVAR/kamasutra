import React from 'react';
import Classes from './dialog.module.css'
import {NavLink} from "react-router-dom";
import User from "./compontsDialogs/User";

const Dialogs = (props) => {
    return (
        <div className={Classes.dialogs}>
            <div className={Classes.dialogsUser}>
               <User ID="1" Name="Ddvar" Url="https://avatars.mds.yandex.net/get-zen_doc/985972/pub_5d63ef4cf73d9d00adeba678_5d63f06bf73d9d00adeba67e/scale_1200" />
            </div>

            <div className={Classes.messages}>
                <div className={Classes.message}>
                    <p>Me:</p>
                    hello
                </div>
                <div className={Classes.message}>
                    <p>Dvar:</p>
                    how are u?
                </div>
            </div>
        </div>
    );
};

export default Dialogs;