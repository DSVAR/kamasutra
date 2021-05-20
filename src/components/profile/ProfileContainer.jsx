import React from 'react';
import Profile from './Profile';
import * as axios from "axios";
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import {getStatus, getUser, updateStatusProfile} from './../../Redux/profile-reducer'
import Dialogs from "../dialogs/Dialogs";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount(){
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 17039;
        }

        this.props.getUser(userId);
        this.props.getStatus(userId);
        
    }

    render(){
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusProfile}/>
        )
    }
}




let mapStateToProps = (state) => ({
    profile: state.posts.profile,
    status:state.posts.status
   
})

export default compose(
    connect(mapStateToProps, {getUser,getStatus,updateStatusProfile}),
    withRouter
    //,withAuthRedirect
)(ProfileContainer)

