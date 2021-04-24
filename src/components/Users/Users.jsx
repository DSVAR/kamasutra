import React from 'react';
import Classes from './User.Module.css';
import * as axios from "axios";

let Users=(props)=>{
    let photoUrl='https://avatars.mds.yandex.net/get-zen_doc/985972/pub_5d63ef4cf73d9d00adeba678_5d63f06bf73d9d00adeba67e/scale_1200';
   if(props.users.length==0){
       axios.get("https://social-network.samuraijs.com/api/1.0/users")
           .then(response=>{
               props.setUsers(response.data.items)});
   }
    return(
        
        <div className={Classes.main_View}>
           {props.users.map(u =>
               <div key={u.id} className={Classes.item}>
                   <div> 
                     <img  className={Classes.photoUser} src={u.photos.small !=null ? u.photos.small : photoUrl }/>
                   </div>
                   <div>
                      {u.followed ? 
                      <button onClick={()=>{props.unFollow(u.id)}} > unfollow</button> 
                      : <button onClick={()=>{props.follow(u.id)}}> follow</button>}
                   </div>
                   <div >
                       <p >{u.name} </p>
                    </div>
                    <div> 
                        <p >{u.status!=null ? u.status :"i'm batman"} </p>
                    </div>
               
               </div>
           )}
        </div>
    )
}

export default Users;