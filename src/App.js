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
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Route exact path="/dialogs" render={() => <DialogsContainer
                       
                    />}/>
                    <Route path='/profile' render={() =>
                        <Profile/>}/>
                </div>
            </div>
        
    );
}


export default App;

