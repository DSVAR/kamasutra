import React from 'react';
import Classes from './User.Module.css';

let Users=(props)=>{
   debugger;
    return(
        
        <div className={Classes.main_View}>
           {props.users.map(u =>
               <div key={u.ID} className={Classes.item}>
                   <div> 
                     <img  className={Classes.photoUser} src={u.Img}/>
                   </div>
                   <div>
                      {u.fallowerd ? 
                      <button onClick={()=>{props.unFollow(u.ID)}} > unfollow</button> 
                      : <button onClick={()=>{props.follow(u.ID)}}> follow</button>}
                   </div>
                   <div >
                       <p >{u.Name} </p>
                    </div>
                    <div> 
                        <p >{u.Locatinon.city} </p>
                    </div>
               
               </div>
           )}
        </div>
    )
}

export default Users;