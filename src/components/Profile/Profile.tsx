import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

type PropsType = {
    isOwner: boolean
}

export const Profile: React.FC<PropsType> = (props) => {
    return (
        <div className={s.profilePage}>
            <ProfileInfo {...props}/>
        </div>
    );
}