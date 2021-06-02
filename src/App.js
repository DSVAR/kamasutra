import React, {Component} from 'react'
import './App.css';
import ProfileContainer from "./components/profile/ProfileContainer";
import "./style.css";
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import DialogsContainer from "./components/dialogs/DialogsContainer";
import NavbarContainer from "./components/navbar/NavbarContainer";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from "./components/header/HeaderContainer";
import LoginContainer from "./components/login/loginContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initialize} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./Redux/redux-store";

class App extends Component {

    componentDidMount(){
        this.props.initialize();
    }

    render(){
        if (!this.props.initialized) {
            return <Preloader isFetching={true}/>
        } else
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
}


const mapStateToProps = (state) => ({
    initialized: state.appReducer.initialized
})

let AppContainer = compose(withRouter,
    connect(mapStateToProps, {initialize}))(App);

 const MainApp= (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}


export  default MainApp;