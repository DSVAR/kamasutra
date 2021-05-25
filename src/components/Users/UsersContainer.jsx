import React from 'react';
import { connect } from 'react-redux';
import {
    follow,
    unfollow,
    setCurentPage,
    setIsFollow, getUsersThunkCreator
} from '../../Redux/user-Reducer';
import Users from './Users';
import * as axios from "axios";
import Preloader from './../common/Preloader/Preloader'
import {UserApi} from "../../api/api";
import {compose} from "redux";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingProcess,
    getIsFetching,
    getPageSize,
    getTotalUsers,
    getUser
} from "../../Redux/users-selectors";
  
class UsersAPIComponent extends React.Component {
     
     
        componentDidMount(){
        this.props.getUsersThunkCreator(this.props.curentPage,this.props.pageSize);        

        }


         onPageChanged=(pageNumber)=>{
             this.props.getUsersThunkCreator(pageNumber,this.props.pageSize);
         }
        
    render(){
       
        return(
       
       <>
            
            <Preloader isFetching={this.props.isFetching} />
            <Users onPageChanged={this.onPageChanged} pageCount={this.props.pageCount}
            setUsers={this.props.setUsers}  totalUser={this.props.totalUser}
            setTotalCount={this.props.setTotalCount} pageSize={this.props.pageSize}
            curentPage={this.props.curentPage} users={this.props.users}
            follow={this.props.follow} unfollow={this.props.unfollow}
            setIsFollow={this.props.setIsFollow}  isFollowingProcensing={this.props.isFollowingProcensing}     
            />

            </>
        )
    }
}


// let mapStateToProps=(state)=>
// {    
//     return{
//         users: state.usersPage.users,
//         pageSize:state.usersPage.pageSize,
//         totalUser:state.usersPage.totalUser,
//         curentPage:state.usersPage.curentPage,
//         isFetching:state.usersPage.isFetching,
//         isFollowingProcensing:state.usersPage.isFollowingProcensing
//     }
// }


let mapStateToProps=(state)=>
{
    return{
        users: getUser(state),
        pageSize:getPageSize(state),
        totalUser:getTotalUsers(state),
        curentPage:getCurrentPage(state),
        isFetching:getIsFetching(state),
        isFollowingProcensing:getFollowingProcess(state)
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{
        follow,
        unfollow,
        setCurentPage,
        setIsFollow,
        getUsersThunkCreator
    })
)(UsersAPIComponent)