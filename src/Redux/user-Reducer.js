import {UserApi} from "../api/api";
import {updateObjectInArray} from "../utils/objects-helper";

const Follow = 'Follow';
const Unfollow = 'Unfollow';
const SET_USERS = 'SET_USERS';
const SET_CURENT_PAGE = "SET_CURENT_PAG";
const SET_TOTAL_COUNT = " SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOW = 'TOGGLE_IS_FOLLOW'

let initialState = {
    users: [],
    pageSize: 5,
    totalUser: 0,
    curentPage: 1,
    isFetching: true,
    isFollowingProcensing: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case Follow: {

            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId,'id',{followed: true})
            }
        }
        case Unfollow: {
            return {
                ...state, 
                users: updateObjectInArray(state.users, action.userId,'id',{followed: false}) 
            }

        }
        case SET_USERS: {
            return {...state, users: action.users}

        }
        case SET_CURENT_PAGE: {
            return {...state, curentPage: action.pageNumber}
        }
        case SET_TOTAL_COUNT: {

            return {...state, totalUser: action.totalUser}
        }

        case TOGGLE_IS_FETCHING: {

            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOW: {

            return {
                ...state,
                isFollowingProcensing: action.isFollowingProcensing ? [...state.isFollowingProcensing, action.userId]
                    : state.isFollowingProcensing.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }


}


export const acceptFollow = (userId) => ({type: Follow, userId});
export const acceptUnfollow = (userId) => ({type: Unfollow, userId});
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurentPage = (pageNumber) => ({type: SET_CURENT_PAGE, pageNumber})
export const setTotalCount = (totalUser) => ({type: SET_TOTAL_COUNT, totalUser})
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setIsFollow = (isFollowingProcensing, userId) => ({type: TOGGLE_IS_FOLLOW, isFollowingProcensing, userId})


const followUnfollowFlow=async(dispatch,userId,apiMethod,actionCreator)=>{
    dispatch(setIsFollow(true, userId));
    let response = await apiMethod(userId);
   
    if (response.resultCode === 0) {

        dispatch(actionCreator(userId));
    }
    dispatch(setIsFollow(false, userId));

}


export const getUsersThunkCreator = (curentPage, pageSize) => async (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setCurentPage(curentPage))

    let response = await UserApi.getUsers(curentPage, pageSize)


    dispatch(setUsers(response.items));
    dispatch(setTotalCount(response.totalCount))
    
    dispatch(setIsFetching(false));

}

export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch,userId,UserApi.follow.bind(UserApi),acceptFollow)
}

export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch,userId,UserApi.unfollow.bind(UserApi), acceptUnfollow)
}

export default userReducer;