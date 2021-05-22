import axios from "axios";
import {Auth, UserApi} from "../api/api";

const SET_USER_DATA = 'Follow';
const ENTER='ENTER';
const LOGOUT='LOGOUT';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA: {

            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        case ENTER:{
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        case LOGOUT:{
            return {
                ...state,
                ...action.data,
                isAuth: false
            }
        }
        default:
            return state;
    }


}


export const setUserData = (userId,email,login) => ({
    type: SET_USER_DATA,
    data:{userId,email,login}
})


export const setEnter = (userId,email,login) => ({
    type: ENTER,
    data:{userId,email,login}

})
export const setLogout = () => ({
    type: LOGOUT
})

export const authentication =()=>{
    return(dispatch)=>{
        UserApi.authentication()
            .then(response => {
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data;
                    dispatch(setUserData(id, email, login))
                }
            });
    }
}
export const entering =(email,password,remeberMe)=>{
    return(dispatch)=>{
        Auth.login(email,password,remeberMe)
            .then(response => {
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data;
                    dispatch(setEnter(id, email, login))
                }
            });
    }
}
export const logouting =()=>{
    return(dispatch)=>{
        Auth.logout()
            .then(response => {
               dispatch(setLogout())
            });
    }
}

export default authReducer;