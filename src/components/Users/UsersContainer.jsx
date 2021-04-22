import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsers, unFollowAC } from '../../Redux/user-Reducer';
import Users from './Users';


let mapStateToProps=(state)=>
{
    return{
        users: state.usersPage.users
    }
}
let mapDispatchToProps=(dispatch)=>
{
    return{
        follow:(userId)=>{
            dispatch(followAC(userId))
        },
        unFollow:(userId)=>{
            dispatch(unFollowAC(userId))
        },
        setUsers:(users)=>{
            dispatch(setUsers(users))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);