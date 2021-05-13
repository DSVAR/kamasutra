import React from "react";
import Classes from './User.Module.css';
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {UserApi} from "../../api/api";
import {setIsFollow} from "../../Redux/user-Reducer";



let Users=(props)=>{
    
    let photoUrl='https://avatars.mds.yandex.net/get-zen_doc/985972/pub_5d63ef4cf73d9d00adeba678_5d63f06bf73d9d00adeba67e/scale_1200';
  
    let pageCount=Math.ceil( props.totalUser/props.pageSize);
    
    let pages=[];
    for(let i=1;i<=pageCount;i++){
        pages.push(i);
    }
 
    return(
        
       <div className={Classes.main_View}>
       <div>
           {pages.map(p=>{
             return <span className={props.curentPage ==p && Classes.pageNumber}
             onClick={(e)=>{ props.onPageChanged(p);}}>
                 {p}</span>      
           })}

         
       </div>

      <div>     

            {props.users.map(u =>
          <div key={u.id} className={Classes.item}>
              <div> 
               <NavLink to={'/profile/'+u.id}>
                    <img  className={Classes.photoUser} src={u.photos.small !=null ? u.photos.small :photoUrl }/>
                </NavLink>
               </div>
              <div>
                  
                 {u.followed ? 
                 <button disabled={props.isFollowingProcensing.some(id=>id===u.id)} onClick={()=>{
                    props.setIsFollow(true,u.id);
                     UserApi.unfollow(u.id).then(response=>{                            
                            if(response.resultCode===0){
                                props.unFollow(u.id);
                            }
                         props.setIsFollow(false,u.id);
                     });
                                   
                 }} > unfollow</button> 
                     
                     
                 : <button disabled={props.isFollowingProcensing.some(id=>id===u.id)} onClick={()=>{
                         props.setIsFollow(true,u.id);
                         UserApi.follow(u.id).then(response=>{                             
                                 if(response.resultCode===0){
                                     
                                     props.follow(u.id);
                                 }
                             props.setIsFollow(false,u.id);
                             });
                        
                 
                 }}> follow</button>}
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
   </div>
    )
}

export default Users