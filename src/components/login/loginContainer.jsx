﻿import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {entering} from "../../Redux/auth-reducer";
import {Redirect, withRouter} from "react-router-dom";
import Login from "./login";

class LoginContainer extends Component {
    
    render(){
        if (this.props.isAuth)  return <Redirect to={"/profile"}/>;
        return (
            
            <Login {...this.props} entering={this.props.entering}/>
    
        );
    }
}

let mapToProps=(state)=>({
    isAuth:state.auth.isAuth
})

export default compose(connect(mapToProps, {entering}),withRouter)(LoginContainer);