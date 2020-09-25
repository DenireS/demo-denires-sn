import React, {ChangeEvent, SetStateAction, useState} from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatus} from './ProfileStatus';
import userPhoto from '../../../assets/images/User.jpg';
import {ProfileDataReduxForm} from "./ProfileDataForm";
import {AddMessageUserFormRedux} from "../../common/MessageForm/UsersMessageForm";
import {ContactsType, ProfileType} from "../../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {getIsFetching, getProfile, getProfileEditStatus, getStatus} from "../../../redux/profile-selectors";
import {toggleIsFetching, savePhoto, saveProfile, setProfileEditStatus} from "../../../redux/profile-reducer";
import {sendUserMessage} from "../../../redux/dialogs-reducer";
import classNames from "classnames";
import {ProfilePosts} from "./ProfilePosts/ProfilePosts";

type PropsType = {
    isOwner: boolean
}

export const Profile: React.FC<PropsType> = React.memo(({isOwner}) => {

    const profile = useSelector(getProfile)
    const profileEditStatus = useSelector(getProfileEditStatus)
    const isFetching = useSelector(getIsFetching)
    const status = useSelector(getStatus)

    const dispatch = useDispatch();

    let [formControl, setFormControl] = useState(false)
    let [receiverId, setReceiverId] = useState<null | number>(null)

    let openForm = (id: SetStateAction<null | number>) => {
        setFormControl(true)
        setReceiverId(id)
    }

    const onSubmit = (formDate: ProfileType) => {
        dispatch(toggleIsFetching(true));
        dispatch(saveProfile(formDate));
    };
    const goToEditMode = () => {
        dispatch(setProfileEditStatus(true));
    };
    if (!profile) {
        return <Preloader/>;
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            dispatch(savePhoto(e.target.files[0]));
        }
    }


    let addNewMessage = (values: any) => {
        dispatch(sendUserMessage(receiverId as number, values.newMessageBody));
        values.newMessageBody = null;
    };
    return (
        <div className={s.profilePage}>
            <div className={s.profileShape}>
                <div className={s.profileShapeInfo}>
                    <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                    {isOwner &&
                    <label className={s.buttonUpload}><input type={'file'} onChange={onMainPhotoSelected}/> Upload
                        image</label>}
                    {!isOwner &&
                    <div className={s.openMessageForm} onClick={() => openForm(profile.userId)}>Write message</div>}
                </div>

                {formControl
                    ? <AddMessageUserFormRedux onSubmit={addNewMessage} userId={profile.userId}
                                               receiver={profile.fullName}
                                               photo={profile.photos.small} setFormControl={setFormControl}
                                               receiverId={receiverId}/>
                    : null}
            </div>
            <div className={s.profileInfo}>
                {profileEditStatus
                    ? <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}
                                            isFetching={isFetching}/>
                    :
                    <ProfileData profile={profile} isOwner={isOwner}
                                 goToEditMode={goToEditMode} status={status}/>}
                <ProfilePosts isOwner={isOwner} photo={profile.photos.small || userPhoto}
                              senderName={profile.fullName}/>
            </div>

        </div>
    );
})

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
    status: string
}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode, status}) => {

    let [activeClass, setActiveClass] = useState(false);

    return (
        <div className={s.profileData}>

            {isOwner && <div>
                <button className={s.goToEditMode} onClick={goToEditMode}>edit</button>
            </div>}
            <div className={s.fullName}>
                {profile.fullName}
            </div>
            <ProfileStatus status={status}/>
            <div className={s.lookingForAJob}>
                <b className={s.dataTitle}>Looking for a job:</b> <span
                className={s.dataText}>{profile.lookingForAJob ? 'yes' : 'no'}</span>
            </div>
            {profile.lookingForAJob &&
            <div className={s.mySkills}>
                <b className={s.dataTitle}>My professional skills:</b> <span
                className={s.dataText}>{profile.lookingForAJobDescription}</span>
            </div>
            }
            <div className={s.aboutMe}>
                <b className={s.dataTitle}>About me:</b> <span className={s.dataText}>{profile.aboutMe}</span>
            </div>
            <div className={s.contactsMenu}>
                <div className={s.contactsTitle} onClick={() => setActiveClass(!activeClass)}>{
                    activeClass ? 'Hide Contacts' : 'Show Contacts'
                }</div>
                {activeClass ? <div className={classNames(s.contactsContent, s.active)}>
                        {Object.keys(profile.contacts).map(key =>
                            <Contact contactTitle={key} key={key}
                                     contactValue={profile.contacts[key as keyof ContactsType]}/>)}
                    </div>
                    : <div className={classNames(s.contactsContent, s.passive)}>
                        {Object.keys(profile.contacts).map(key =>
                            <Contact contactTitle={key} key={key}
                                     contactValue={profile.contacts[key as keyof ContactsType]}/>)}
                    </div>}


            </div>
        </div>
    )
}

type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    let lenght
    if (contactValue && contactValue.length) {
        lenght = contactValue.length
    }

    return (
        <div>
            {lenght as number > 1 ?
                <div className={s.contact}><b className={s.dataTitle}>{contactTitle}</b>
                    <a href={contactValue} target="_blank">{contactValue}</a>
                </div> : null}
        </div>
    )
}