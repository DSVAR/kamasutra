import {createSelector} from "reselect";

export const getUser=(state)=>{
    return state.usersPage.users.filter(u=>true)
}

export const getUserSelector= createSelector(getUser, (users)=>{
    return users.filter(u=>true)    
})

export const getPageSize=(state)=>{
    return state.usersPage.pageSize
}

export const getTotalUsers=(state)=>{
    return state.usersPage.totalUser
}

export const getCurrentPage=(state)=>{
    return state.usersPage.curentPage
}

export const getIsFetching=(state)=>{
    return state.usersPage.isFetching
}

export const getFollowingProcess=(state)=>{
    return state.usersPage.isFollowingProcensing
}