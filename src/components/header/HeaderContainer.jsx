import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {authentication, setUserData} from "../../Redux/auth-reducer";
import User from "../dialogs/compontsDialogs/User";


class HeaderContainer extends React.Component {

    componentDidMount(){
        
        this.props.authentication();
    }

    render(){
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps, {authentication})(HeaderContainer);