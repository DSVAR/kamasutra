import React, {Component} from 'react'
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import "./style.css";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom'

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    {/*<Route exact path="/dialogs" component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}

                    <Route exact path="/dialogs" render={()=><Dialogs
                        state={props.appState.dialogs}
                    />}/>

                        <Route path='/profile' render={()=><Profile/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;

