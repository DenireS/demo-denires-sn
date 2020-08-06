import React, {ChangeEvent, SetStateAction, useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../../assets/images/User.jpg';
import ProfileDataForm from "./ProfileDataForm";
import AddMessageUserFormRedux from "../../../common/MessageForm/UsersMessageForm";
import {ContactsType, ProfileType} from "../../../../types/types";

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

const ProfileInfo: React.FC<PropsType> = ({
                                              profile, status, updateStatus, isOwner, savePhoto, saveProfile,
                                              profileEditStatus, setProfileEditStatus, editIsFetching, isFetching,
                                              sendUserMessage
                                          }) => {

    let [formControl, setFormControl] = useState(false)
    let [receiverId, setReceiverId] = useState<null | number>(null)

    let openForm = (id: SetStateAction<null | number>) => {
        setFormControl(true)
        setReceiverId(id)
    }

    const onSubmit = (formDate: ProfileType) => {
        editIsFetching(true)
        saveProfile(formDate);
    };
    const goToEditMode = () => {
        setProfileEditStatus(true);
    };
    if (!profile) {
        return <Preloader/>;
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0]);
        }
    }


    let addNewMessage = (values: any) => {
        sendUserMessage(receiverId, values.newMessageBody);
        values.newMessageBody = null;
    };
    return (
        <div>
            <div className={s.description}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                {!isOwner && <div onClick={() => openForm(profile.userId)}>Write message</div>}
                {formControl
                    ? <AddMessageUserFormRedux onSubmit={addNewMessage} userId={profile.userId}
                                               receiver={profile.fullName}
                                               photo={profile.photos.small} setFormControl={setFormControl}
                                               receiverId={receiverId}/>
                    : null}
                {profileEditStatus
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}
                                       isFetching={isFetching}/>
                    :
                    <ProfileData profile={profile} isOwner={isOwner}
                                 goToEditMode={goToEditMode}/>}

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}
                />
            </div>
        </div>
    );
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: ()=> void
}

const ProfileData:React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {

    let [activeClass, setActiveClass] = useState('active');

    return (
        <div className={s.profileData}>
            {isOwner && <div>
                <button onClick={goToEditMode}>edit</button>
            </div>}
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div className={s[activeClass]}>
                <div className={s.contactsMenu} onClick={() => setActiveClass('passive')}></div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key =>
                <Contact contactTitle={key} key={key} contactValue={profile.contacts[key as keyof ContactsType]}/>)}
            </div>
        </div>
    )
}

type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;
