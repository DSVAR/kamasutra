import React from 'react';
import Profile from './Profile';
import * as axios from "axios";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {setUsersProfile} from './../../Redux/profile-reducer'

class ProfileContainer extends React.Component {

    componentDidMount(){
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 2;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                debugger;
                this.props.setUsersProfile(response.data);
            });

    }

    render(){

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.posts.profile
})

let WithUrlContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUsersProfile})(WithUrlContainer);
