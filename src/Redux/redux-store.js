import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogcReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import userReducer from "./user-Reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';

let reducers=combineReducers(
    {
        posts: profileReducer,
        dialogs: dialogcReducer,
        sidebar: sidebarReducer,
        usersPage: userReducer ,
        auth:authReducer
    }
)

let store=createStore(reducers,applyMiddleware(thunkMiddleware));

window.store=store;

export default  store;