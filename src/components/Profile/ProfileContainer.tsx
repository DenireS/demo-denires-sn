import React from 'react';
import s from './Profile.module.css';
import {
    getUserProfile,
    getStatus,
    updateStatus, savePhoto, saveProfile, setProfileEditStatus, editIsFetching,
} from '../../redux/profile-reducer';
import Profile from './Profile';
import {connect, useSelector} from 'react-redux';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {compose} from 'redux';
import {sendUserMessage} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";
import {getProfile} from "../../redux/profile-selectors";

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    getUserProfile: (id: number) => void
    getStatus: (id: number) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => void
    setProfileEditStatus: (status: boolean) => boolean
    editIsFetching: (status: boolean) => boolean
    sendUserMessage: (receiverId: number | null, body: string) => boolean
}
type PathParamsType = {
    userId: string
}
type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        if (!userId) {
            console.log('Id should exists in URL para,s or in state (`authorizedUserId`)')
        } else {
            this.props.getUserProfile(userId);
            this.props.getStatus(userId);
        }

    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
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

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    profileEditStatus: state.profilePage.profileEditStatus,
    isFetching: state.profilePage.isFetching,
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus,
        savePhoto,
        saveProfile,
        setProfileEditStatus,
        editIsFetching,
        sendUserMessage,
    }),
    withRouter)
(ProfileContainer);
