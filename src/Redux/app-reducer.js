import axios from "axios";
import {Auth, UserApi} from "../api/api";
import {stopSubmit} from "redux-form";
import {authentication} from "./auth-reducer";

const INITIALIZED_SUCCSESS = 'INITIALIZED_SUCCSESS';


let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case INITIALIZED_SUCCSESS: {

            return {
                ...state,
                initialized: true
            }
        }

        default:
            return state;
    }


}


export const initialiazedSucces = () => ({
    type: INITIALIZED_SUCCSESS
})


//thunk доступость к dispatch через замыкание
export const initialize = () => {
    return (dispatch) => {
        let promise = dispatch(authentication());
        
        promise.then(() => {
            dispatch(initialiazedSucces());
        });

    }
}
export default appReducer;