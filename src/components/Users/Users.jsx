import React from 'react';
import Classes from './User.Module.css';

let Users=(props)=>{
    debugger;
    return(
        
        <div className={Classes.main_View}>
           {props.users.map(u =>
               <div key={u.Id} className={Classes.item}>
                   <img src={u.Img}/>
                   
               <p >{u.Name} </p>
               <p >{u.Locatinon.city} </p>
               </div>
           )}
        </div>
    )
}

export default Users;