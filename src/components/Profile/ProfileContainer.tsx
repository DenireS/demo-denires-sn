import React, {useEffect} from 'react';
import {getStatus, getUserProfile,} from '../../redux/profile-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import {getAuthorizedUserId} from "../../redux/auth-selectors";
import {getIsFetching} from "../../redux/profile-selectors";
import {Preloader} from "../common/Preloader/Preloader";
import s from "./ProfileContainer.module.css";
import {Profile} from "./ProfileInfo/Profile";


type PropsType = {}
type ParamsType = {
    userId: string | undefined
}

export const ProfileContainer: React.FC<PropsType> = (props) => {
    const authorizedUserId = useSelector(getAuthorizedUserId)
    const isFetching = useSelector(getIsFetching)
    const dispatch = useDispatch();
    const history = useHistory()
    const params = useParams<ParamsType>()

    const refreshProfile = () => {
        // @ts-ignore
        let userId: number | null = +params.userId
        if (!userId) {
            userId = authorizedUserId;
            if (!userId) {
                history.push('/login');
            }
        }
        if (!userId) {
            console.log('Id should exists in URL params or in state (`authorizedUserId`)')
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
    }, [params.userId])


    return <>
        {isFetching ? <Preloader/> : null}
        <div className={s.profilePage}>
            <Profile isOwner={!params.userId} {...props} />
        </div>
    </>

}


