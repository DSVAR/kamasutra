import React, {Component} from 'react'
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import "./style.css";
import {BrowserRouter, Route} from 'react-router-dom'
import DialogsContainer from "./components/dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.appState.sidebar}/>

                <div className='app-wrapper-content'>
                    <Route exact path="/dialogs" render={() => <DialogsContainer
                        store={props.store}
                        state={props.appState.dialogs}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path='/profile' render={() => <Profile
                        dispatch={props.dispatch}
                        state={props.appState.posts}
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;

