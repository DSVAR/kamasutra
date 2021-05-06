import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogcReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import userReducer from "./user-Reducer";

let reducers=combineReducers(
    {
        posts: profileReducer,
        dialogs: dialogcReducer,
        sidebar: sidebarReducer,
        usersPage: userReducer 
    }
)

let store=createStore(reducers);

window.store=store;

export default  store;