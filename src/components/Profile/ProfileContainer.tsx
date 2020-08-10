import React, {useEffect} from 'react';
import s from './Profile.module.css';
import {
    getUserProfile,
    getStatus,
} from '../../redux/profile-reducer';
import {Profile} from './Profile';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {getAuthorizedUserId} from "../../redux/auth-selectors";

type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType>;

const ProfileContainer: React.FC<PropsType> = (props) => {

    const authorizedUserId = useSelector(getAuthorizedUserId)

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
            dispatch(getUserProfile(userId));
            dispatch(getStatus(userId));
        }
    }

    useEffect(() => {
        refreshProfile()
    }, [])

    useEffect(() => {
        refreshProfile()
    }, [props.match.params.userId])


    return (
        <div>
            <Profile isOwner={!props.match.params.userId}/>
        </div>
    );
}


export const ProfileWrappedContainer = withRouter(ProfileContainer)


