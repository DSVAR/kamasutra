import React from 'react';
import { connect } from 'react-redux';
import { follow, setUsers, unFollow, setCurentPage,setTotalCount,setIsFetching } from '../../Redux/user-Reducer';
import Users from './Users';
import * as axios from "axios";
import Preloader from './../common/Preloader/Preloader'
  
class UsersAPIComponent extends React.Component {
     
     
        componentDidMount(){
         this.props.setIsFetching(true)

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curentPage}&count=${this.props.pageSize}`)
            .then(response=>{
                this.props.setIsFetching(false)       
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount)
            });
         

        }


         onPageChanged=(pageNumber)=>{
            this.props.setIsFetching(true)       
            this.props.setCurentPage(pageNumber);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response=>{
                this.props.setIsFetching(false);       
                this.props.setUsers(response.data.items)});
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
        isFetching:state.usersPage.isFetching
    }
}


// let mapDispatchToProps=(dispatch)=>
// {
//     return{
        
//         follow:(userId)=>{
//             dispatch(followAC(userId))
//         },
//         unFollow:(userId)=>{
//             dispatch(unFollowAC(userId))
//         },
//         setUsers:(users)=>{
//             dispatch(setUsers(users))
//         },
//         setCurentPage:(pagenumber)=>{
//             dispatch(setCurentPage(pagenumber))
//         },
//         setTotalCount:(totalUser)=>{
//             dispatch(setTotalCount(totalUser))
//         },
//         setIsFetching:(isFetching)=>{
//             dispatch(setIsFetching(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps,{        
    follow,
    unFollow,
    setUsers,
    setCurentPage,
    setTotalCount,
    setIsFetching
    })(UsersAPIComponent);