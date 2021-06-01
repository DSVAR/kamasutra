import React, {Component} from 'react';
import {connect} from "react-redux";
import {entering,authentication} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
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

export default connect(mapToProps, {entering,authentication})(LoginContainer);
