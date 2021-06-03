import React from "react";
import Classes from './User.Module.css';
import Paginator from "./Paginator";
import User from "./User";


let Users = ({
                 curentPage, onPageChanged, totalUser, pageSize, follow, unfollow, isFollowingProcensing
                 , ...props
             }) => {
    let photoUrl = 'https://avatars.mds.yandex.net/get-zen_doc/985972/pub_5d63ef4cf73d9d00adeba678_5d63f06bf73d9d00adeba67e/scale_1200';


    return (

        <div className={Classes.main_View}>

            <Paginator currentPage={curentPage} onPageChanged={onPageChanged} totalItem={totalUser} pageSize={pageSize}/>
            <div>

                {props.users.map(u => <User key={u.id} user={u} follow={follow} unfollow={unfollow}
                                            isFollowingProcensing={isFollowingProcensing}/>)}
            </div>
        </div>
    )
}

export default Users