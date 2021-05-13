import React from 'react';
import { connect } from 'react-redux';
import {
    follow,
    setUsers,
    unFollow,
    setCurentPage,
    setTotalCount,
    setIsFetching,
    setIsFollow
} from '../../Redux/user-Reducer';
import Users from './Users';
import * as axios from "axios";
import Preloader from './../common/Preloader/Preloader'
import {UserApi} from "../../api/api";
  
class UsersAPIComponent extends React.Component {
     
     
        componentDidMount(){
         this.props.setIsFetching(true)

            UserApi.getUsers(this.props.curentPage,this.props.pageSize).then(response=>{
                this.props.setIsFetching(false)       
                this.props.setUsers(response.items);
                this.props.setTotalCount(response.totalCount)
            });
         

        }


         onPageChanged=(pageNumber)=>{
            this.props.setIsFetching(true)       
            this.props.setCurentPage(pageNumber);
             UserApi.getUsers(pageNumber,this.props.pageSize).then(response=>{
                this.props.setIsFetching(false);       
                this.props.setUsers(response.items)});
        }
        
    render(){
       
        return(
       
       <>
            
            <Preloader isFetching={this.props.isFetching} />
            <Users onPageChanged={this.onPageChanged} pageCount={this.props.pageCount}
            setUsers={this.props.setUsers}  totalUser={this.props.totalUser}
            setTotalCount={this.props.setTotalCount} pageSize={this.props.pageSize}
            curentPage={this.props.curentPage} users={this.props.users}
            follow={this.props.follow} unFollow={this.props.unFollow}
                   setIsFollow={this.props.setIsFollow}  isFollowingProcensing={this.props.isFollowingProcensing}     
            />

            </>
        )
    }
}


let mapStateToProps=(state)=>
{    
    return{
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUser:state.usersPage.totalUser,
        curentPage:state.usersPage.curentPage,
        isFetching:state.usersPage.isFetching,
        isFollowingProcensing:state.usersPage.isFollowingProcensing
    }
}

export default connect(mapStateToProps,{        
    follow,
    unFollow,
    setUsers,
    setCurentPage,
    setTotalCount,
    setIsFetching,
    setIsFollow
    })(UsersAPIComponent);