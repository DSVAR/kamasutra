import axios from "axios";
import {Auth, UserApi} from "../api/api";
import {stopSubmit} from "redux-form";

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
                ...action.data
            }
        }

        default:
            return state;
    }


}


export const setUserData = (userId,email,login,isAuth=false) => ({
    type: SET_USER_DATA,
    data:{userId,email,login,isAuth}
})



export const setLogout = () => ({
    type: LOGOUT
})
//thunk доступость к dispatch через замыкание

export const authentication =()=>{
    return(dispatch)=>{
        return UserApi.authentication()
            .then(response => {
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data;
                    dispatch(setUserData(id, email, login,true))
                }
            });
    }
}
export const entering =(email,password,remeberMe)=>{
    return(dispatch)=>{
    
        
        Auth.login(email,password,remeberMe)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setUserData());
                }
                else {
                    let message=response.messages.length>0 ?response.messages[0]: 'some error ';
                    dispatch(stopSubmit('login',{_error:message}));
                }
            });
    }
}
export const logouting =()=>{
    return(dispatch)=>{
        Auth.logout()
            .then(response => {
               dispatch(setUserData(null, null, null,false))
            });
    }
}

export default authReducer;