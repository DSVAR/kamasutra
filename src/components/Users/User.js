import React from "react";
import Classes from './User.Module.css';
import {NavLink} from "react-router-dom";
import Paginator from "./Paginator";


let User = ({user, isFollowingProcensing, follow, unfollow}) => {
    let photoUrl = 'https://avatars.mds.yandex.net/get-zen_doc/985972/pub_5d63ef4cf73d9d00adeba678_5d63f06bf73d9d00adeba67e/scale_1200';


    return (
        <div className={Classes.item}>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img className={Classes.photoUser}
                         src={user.photos.small != null ? user.photos.small : photoUrl}/>
                </NavLink>
            </div>
            <div>

                {user.followed ?
                    <button disabled={isFollowingProcensing.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id)

                    }}> unfollow</button>


                    :
                    <button disabled={isFollowingProcensing.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                    }
                    }> follow</button>}
            </div>
            <div>
                <p>{user.name} </p>
            </div>
            <div>
                <p>{user.status != null ? user.status : "i'm batman"} </p>
            </div>
        </div>
    )
}

export default User;