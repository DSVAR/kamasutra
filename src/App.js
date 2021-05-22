import React, {Component} from 'react'
import './App.css';
import ProfileContainer from "./components/profile/ProfileContainer";
import "./style.css";
import { Route} from 'react-router-dom'
import DialogsContainer from "./components/dialogs/DialogsContainer";
import NavbarContainer from "./components/navbar/NavbarContainer";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/login";
import LoginContainer from "./components/login/loginContainer";

const App = (props) => {
    return (        
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavbarContainer/>

                <div className='app-wrapper-content'>
                    <Route exact path="/dialogs" render={() =>
                         <DialogsContainer/>}/>

                    <Route path='/profile/:userId?' render={() =>
                        <ProfileContainer/>}/>

                    <Route path='/users' render={() =>
                        <UsersContainer/>}/>
                    
                    <Route path='/login' render={() =>
                        <LoginContainer/>}/>

                </div>
            </div>
        
    );
}

//swer
export default App;

