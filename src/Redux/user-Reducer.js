const Follow = 'Follow';
const Unfollow= 'Unfollow';
const SET_USERS='SET_USERS';
const SET_CURENT_PAGE="SET_CURENT_PAG";
const SET_TOTAL_COUNT=" SET_TOTAL_COUNT";

let initialState={
    users:[],
    pageSize:5,
    totalUser:0,
    curentPage:1
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
        default:   return state;
    }
   

 }


export const followAC = (userId) => ({
    type: Follow,
    userId
    
})
export const unFollowAC = (userId) => ({
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
export default userReducer;