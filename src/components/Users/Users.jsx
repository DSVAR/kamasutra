import React from 'react';

let Users=(props)=>{
    return(
        <div>
           {props.users.map(u => <div key={u.Id}>{u.Name} </div>)}
        </div>
    )
}

export default Users;