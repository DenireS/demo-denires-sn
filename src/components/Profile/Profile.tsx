import React, {useEffect} from 'react';
import {getStatus, getUserProfile,} from '../../redux/profile-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getAuthorizedUserId} from "../../redux/auth-selectors";
import {getIsFetching} from "../../redux/profile-selectors";
import {Preloader} from "../common/Preloader/Preloader";
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType>;

const Profile: React.FC<PropsType> = (props) => {
    const authorizedUserId = useSelector(getAuthorizedUserId)
    const isFetching = useSelector(getIsFetching)
    const dispatch = useDispatch();

    const refreshProfile = () => {
        let userId: number | null = +props.match.params.userId;
        if (!userId) {
            userId = authorizedUserId;
            if (!userId) {
                props.history.push('/login');
            }
        }
        if (!userId) {
            console.log('Id should exists in URL para,s or in state (`authorizedUserId`)')
        } else {
            dispatch(getStatus(userId));
            dispatch(getUserProfile(userId));
        }
    }

    useEffect(() => {
        refreshProfile()
    }, [])

    useEffect(() => {
        refreshProfile()
    }, [props.match.params.userId])


    return <>
        {isFetching ? <Preloader/> : null}
        <div className={s.profilePage}>
            <ProfileInfo isOwner={!props.match.params.userId} {...props} />
        </div>
    </>

}


export const ProfileWrappedContainer = withRouter(Profile)


