import {UserApi} from "../api/api";

const Follow = 'Follow';
const Unfollow= 'Unfollow';
const SET_USERS='SET_USERS';
const SET_CURENT_PAGE="SET_CURENT_PAG";
const SET_TOTAL_COUNT=" SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOW='TOGGLE_IS_FOLLOW'

let initialState={
    users:[],
    pageSize:5,
    totalUser:0,
    curentPage:1,
    isFetching:true,
    isFollowingProcensing:[] 
}

 const userReducer=(state=initialState,action)=>{
    switch (action.type)
    {        
       
       case Follow:{
            
        return{
            ...state, users:state.users.map(u=>{
            if(u.id== action.userId){
                return{...u, followed:true}
            }
            return u })}
       }
       case Unfollow:{
        return{
            ...state, users:state.users.map(u=>{
            if(u.id== action.userId){
                return{...u, followed:false}
                
            }
            return u })}

       }
       case SET_USERS:{
           return{...state, users:action.users}

       }
       case SET_CURENT_PAGE:{
            return{...state, curentPage:action.pageNumber}
       }
       case SET_TOTAL_COUNT:{
          
        return{...state, totalUser:action.totalUser}
        }

        case TOGGLE_IS_FETCHING:{
          
            return{...state, isFetching:action.isFetching}
        }
        case TOGGLE_IS_FOLLOW:{

            return{...state,
                isFollowingProcensing:action.isFollowingProcensing ? [...state.isFollowingProcensing ,action.userId]
                    :  state.isFollowingProcensing.filter(id=>id!=action.userId)
            }
        }
        default:   return state;
    }
   

 }


export const acceptFollow = (userId) => ({
    type: Follow,
    userId
    
})
export const acceptUnfollow = (userId) => ({
    type: Unfollow,
    userId
    
})

export const setUsers = (users) => ({
    type: SET_USERS,
    users    
})


export const setCurentPage = (pageNumber) => ({
    type: SET_CURENT_PAGE,
    pageNumber    
})
export const setTotalCount=(totalUser)=>({
    type:SET_TOTAL_COUNT,
    totalUser
})
export const setIsFetching=(isFetching)=>({
    type:TOGGLE_IS_FETCHING,
    isFetching
})
export const setIsFollow=(isFollowingProcensing,userId)=>({
    type:TOGGLE_IS_FOLLOW,
    isFollowingProcensing,
    userId
})

 
export const getUsersThunkCreator=(curentPage,pageSize)=>{
   return (dispatch)=>{
       dispatch(setIsFetching(true));
       dispatch(setCurentPage(curentPage))
        UserApi.getUsers(curentPage,pageSize).then(response=>{
            
            dispatch( setIsFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalCount(response.totalCount))
            
        });
    }
}

export const follow=(userId)=>{
    return (dispatch)=>{
        dispatch(setIsFollow(true,userId));
        
        UserApi.follow(userId).then(response => {
            if (response.resultCode === 0) {

                dispatch(acceptFollow(userId));
            }
            dispatch(setIsFollow(false, userId));
        });
    }
}

export const unfollow=(userId)=>{
    
    return (dispatch)=>{
        dispatch(setIsFollow(true,userId));
        
        UserApi.unfollow(userId).then(response => {
            if (response.resultCode === 0) {

                dispatch(acceptUnfollow(userId));
            }
            dispatch(setIsFollow(false, userId));
        });
    }
}

export default userReducer;