import React from 'react';
import Classes from './User.Module.css';
import * as axios from "axios";


let photoUrl='https://avatars.mds.yandex.net/get-zen_doc/985972/pub_5d63ef4cf73d9d00adeba678_5d63f06bf73d9d00adeba67e/scale_1200';
    
class Users extends React.Component {
     
     
        componentDidMount(){
            debugger;
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curentPage}&count=${this.props.pageSize}`)
            .then(response=>{
                this.props.setUsers(response.data.items)});

        }
    render(){
        let pageCount=Math.ceil( this.props.totalUser/ this.props.pageSize);

        let pages=[];
        for(let i=1;i<=pageCount;i++){
            pages.push(i);
        }
       
        return(
       <div className={Classes.main_View}>
            <div>
                {pages.map(p=>{
                  return <span className={this.props.curentPage ==p && Classes.pageNumber}
                  onClick={()=>{ this.props.setCurentPage(p)}}>
                      {p}</span>      
                })}

              
            </div>

           <div>     

                 {this.props.users.map(u =>
               <div key={u.id} className={Classes.item}>
                   <div> 
                     <img  className={Classes.photoUser} src={u.photos.small !=null ? u.photos.small : photoUrl }/>
                   </div>
                   <div>
                      {u.followed ? 
                      <button onClick={()=>{this.props.unFollow(u.id)}} > unfollow</button> 
                      : <button onClick={()=>{this.props.follow(u.id)}}> follow</button>}
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
}

export default Users;