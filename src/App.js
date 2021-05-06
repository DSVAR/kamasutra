import React, {Component} from 'react'
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import ProfileContainer from "./components/profile/ProfileContainer";
import "./style.css";
import {BrowserRouter, Route} from 'react-router-dom'
import DialogsContainer from "./components/dialogs/DialogsContainer";
import NavbarContainer from "./components/navbar/NavbarContainer";
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
    return (        
            <div className='app-wrapper'>
                <Header/>
                <NavbarContainer/>

                <div className='app-wrapper-content'>
                    <Route exact path="/dialogs" render={() =>
                         <DialogsContainer/>}/>

                    <Route path='/profile' render={() =>
                        <ProfileContainer/>}/>

                    <Route path='/users' render={() =>
                        <UsersContainer/>}/>

                </div>
            </div>
        
    );
}

//swer
export default App;

