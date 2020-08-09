import React from 'react';
import {useSelector} from 'react-redux';
import {Preloader} from '../common/Preloader/Preloader';
import {getIsFetching,} from '../../redux/users-selectors';
import {Users} from "./Users";


type PropsType = {
    pageTitle: string,
}
export const UsersPage: React.FC<PropsType> = (props) => {
    const isFetching = useSelector(getIsFetching)

    return (
        <>
            <div>{props.pageTitle}</div>
            {isFetching ? <Preloader/> : null}
            <Users/>
        </>
    );
}

