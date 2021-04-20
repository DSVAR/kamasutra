import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogcReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers=combineReducers(
    {
        posts: profileReducer,
        dialogs: dialogcReducer,
        sidebar: sidebarReducer
    }
)

let store=createStore(reducers);



export default  store;