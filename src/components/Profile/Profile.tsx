import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './MyPosts/ProfileInfo/ProfileInfo';

type PropsType = {
    isOwner: boolean
}

export const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo {...props}/>
        </div>
    );
}