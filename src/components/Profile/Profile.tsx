import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import {ProfileType} from "../../types/types";

type PropsType = {
    profile: ProfileType |null
    status: string
    profileEditStatus: boolean
    isFetching: boolean
    isOwner: boolean

    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => void
    setProfileEditStatus: (status: boolean) => boolean
    editIsFetching: (status: boolean) => boolean
    sendUserMessage: (receiverId: number | null, body: string) => boolean
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo {...props}/>
        </div>
    );
}

export default Profile;
