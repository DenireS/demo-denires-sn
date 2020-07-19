import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

function Profile(props) {
  return (
    <div>
      <ProfileInfo {...props}/>
    </div>
  );
}

export default Profile;
