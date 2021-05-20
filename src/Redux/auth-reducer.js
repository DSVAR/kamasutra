import axios from "axios";
import {UserApi} from "../api/api";

const SET_USER_DATA = 'Follow';


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

        default:
            return state;
    }


}


export const setUserData = (userId,email,login) => ({
    type: SET_USER_DATA,
    data:{userId,email,login}

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


export default authReducer;