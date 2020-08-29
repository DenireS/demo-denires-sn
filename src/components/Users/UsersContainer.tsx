import React from 'react';
import {useSelector} from 'react-redux';
import {Preloader} from '../common/Preloader/Preloader';
import {getIsFetching,} from '../../redux/users-selectors';
import {WrappedUsers} from "./Users";


type PropsType = {}
export const UsersPage: React.FC<PropsType> = (props) => {
    const isFetching = useSelector(getIsFetching)

    return (
        <>
            {isFetching ? <Preloader/> : null}
            <WrappedUsers/>
        </>
    );
}

