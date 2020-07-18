import React from 'react';
import s from './Profile.module.css';
import * as axios from 'axios';
import {
    setUserProfile,
    getUserProfile,
    getStatus,
    updateStatus, savePhoto, saveProfile, setProfileEditStatus, editIsFetching,
} from '../../redux/profile-reducer';
import Profile from './Profile';
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom';
import {compose} from 'redux';
import {sendUserMessage} from "../../redux/dialogs-reducer";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <div>
                <Profile isOwner={!this.props.match.params.userId} {...this.props} />
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    profileEditStatus: state.profilePage.profileEditStatus,
    isFetching: state.profilePage.isFetching,
});

export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        getUserProfile,
        getStatus,
        updateStatus,
        savePhoto,
        saveProfile,
        setProfileEditStatus,
        editIsFetching,
        sendUserMessage,
    }),
    withRouter
    // withAuthRedirect
)(ProfileContainer);
