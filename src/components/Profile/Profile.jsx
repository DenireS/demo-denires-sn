import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile(props) {
  return (
    <div>
      <ProfileInfo {...props}/>
      <MyPostsContainer />
    </div>
  );
}

export default Profile;
