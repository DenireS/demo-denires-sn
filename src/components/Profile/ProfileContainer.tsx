import React, {useEffect} from 'react';
import {getStatus, getUserProfile,} from '../../redux/profile-reducer';
import {Profile} from './Profile';
import {useDispatch, useSelector} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getAuthorizedUserId} from "../../redux/auth-selectors";
import {getIsFetching} from "../../redux/profile-selectors";
import {Preloader} from "../common/Preloader/Preloader";
import {WrappedUsers} from "../Users/Users";

type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType>;

const ProfileContainer: React.FC<PropsType> = (props) => {
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
        <Profile isOwner={!props.match.params.userId}/>
    </>

}


export const ProfileWrappedContainer = withRouter(ProfileContainer)


