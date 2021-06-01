import {applyMiddleware, combineReducers,compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogcReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import userReducer from "./user-Reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";

let reducers = combineReducers(
    {
        posts: profileReducer,
        dialogs: dialogcReducer,
        sidebar: sidebarReducer,
        usersPage: userReducer,
        auth: authReducer,
        form: formReducer,
        appReducer:appReducer

    }
)

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));


 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
     applyMiddleware(thunkMiddleware)  ));

window.store = store;

export default store;