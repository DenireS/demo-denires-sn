import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../../assets/images/User.jpg';
import ProfileDataForm from "./ProfileDataForm";
import AddMessageUserFormRedux from "../../../common/MessageForm/UsersMessageForm";

function ProfileInfo({
                         profile, status, updateStatus, isOwner, savePhoto, saveProfile,
                         profileEditStatus, setProfileEditStatus, editIsFetching, isFetching,
                         sendUserMessage
                     }) {

    let [formControl, setFormControl] = useState(false)
    let [receiverId, setReceiverId] = useState(null)

    let openForm = (id) => {
        setFormControl(true)
        setReceiverId(id)
    }

    const onSubmit = (formDate) => {
        editIsFetching(true)
        saveProfile(formDate);
    };
    const goToEditMode = () => {
        setProfileEditStatus(true);
    };
    if (!profile) {
        return <Preloader/>;
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }


    let addNewMessage = (values) => {
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

const ProfileData = ({profile, isOwner, goToEditMode}) => {

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
                <Contact contactTitle={key} key={key} contactValue={profile.contacts[key]}/>)}
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;
