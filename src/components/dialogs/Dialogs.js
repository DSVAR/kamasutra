import React from 'react';
import Classes from './dialog.module.css'

const Dialogs = (props) => {
    return (
        <div className={Classes.dialogs}>
            <div className={Classes.dialogsUser}>
               <div className={Classes.user}>
                   ddvar
               </div>

                <div className={Classes.user}>
                    Adelya
                </div>

                <div className={Classes.user}>
                    Jenya
                </div>

                <div className={Classes.user}>
                    Piralta
                </div>
            </div>

            <div className={Classes.messages}>
                <div className={Classes.message}>
                    hello
                </div>
                <div className={Classes.message}>
                    how are u?
                </div>
            </div>
        </div>
    );
};

export default Dialogs;