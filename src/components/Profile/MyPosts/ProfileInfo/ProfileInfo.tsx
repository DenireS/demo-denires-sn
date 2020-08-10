import React, {ChangeEvent, SetStateAction, useState} from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from '../../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../../assets/images/User.jpg';
import ProfileDataForm from "./ProfileDataForm";
import {AddMessageUserFormRedux} from "../../../common/MessageForm/UsersMessageForm";
import {ContactsType, ProfileType} from "../../../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {getIsFetching, getProfile, getProfileEditStatus} from "../../../../redux/profile-selectors";
import {editIsFetching, savePhoto, saveProfile, setProfileEditStatus} from "../../../../redux/profile-reducer";
import {sendUserMessage} from "../../../../redux/dialogs-reducer";

type PropsType = {
    isOwner: boolean
}

export const ProfileInfo: React.FC<PropsType> = ({isOwner }) => {

    const profile = useSelector(getProfile)
    const profileEditStatus = useSelector(getProfileEditStatus)
    const isFetching = useSelector(getIsFetching)

    const dispatch = useDispatch();

    let [formControl, setFormControl] = useState(false)
    let [receiverId, setReceiverId] = useState<null | number>(null)

    let openForm = (id: SetStateAction<null | number>) => {
        setFormControl(true)
        setReceiverId(id)
    }

    const onSubmit = (formDate: ProfileType) => {
     dispatch(editIsFetching(true));
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

                <ProfileStatusWithHooks/>
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