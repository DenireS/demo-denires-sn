import React from 'react';
import s from './Profile.module.css';
import * as axios from 'axios';
import {
  setUserProfile,
  getUserProfile,
  getStatus,
  updateStatus,
} from '../../redux/profile-reducer';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
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
  render() {
    return (
      <div>
        <Profile {...this.props} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getUserProfile,
    getStatus,
    updateStatus,
  }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);
