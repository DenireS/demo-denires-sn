import React, {useEffect, useState} from 'react';
import s from './users.module.css';
import {Paginator} from "../common/Paginator/Paginator";
import User from "./User";
import {AddMessageUserFormRedux} from "../common/MessageForm/UsersMessageForm";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType, follow, requestUsers, unfollow} from "../../redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress, getIsFetching,
    getPageSize,
    getPortionSize,
    getTotalItemsCount,
    getUsers,
    getUsersFilter
} from "../../redux/users-selectors";
import {sendUserMessage} from "../../redux/dialogs-reducer";
import {useHistory} from "react-router-dom";
import {getIsAuth} from "../../redux/auth-selectors";
import * as queryString from "querystring";
import {Preloader} from "../common/Preloader/Preloader";

type PropsType = {}

type QueryParamsType = { term?: string, page?: string, friend?: string };

export const Users: React.FC<PropsType> = (props) => {

    let [formControl, setFormControl] = useState(false);
    let [receiverId, setReceiverId] = useState(0);
    let [receiver, setReceiver] = useState<string | null>(null);
    let [photo, setPhoto] = useState<string | null>(null);

    const users = useSelector(getUsers);
    const portionSize = useSelector(getPortionSize);
    const pageSize = useSelector(getPageSize);
    const totalItemsCount = useSelector(getTotalItemsCount);
    const currentPage = useSelector(getCurrentPage);
    const followingInProgress = useSelector(getFollowingInProgress);
    const filter = useSelector(getUsersFilter);
    const isAuth = useSelector(getIsAuth);
    const isFetching = useSelector(getIsFetching)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType

        let actualPage = currentPage
        let actualFilter = filter

        if (!!parsed.page) actualPage = +parsed.page
        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}

        switch (parsed.friend) {
            case 'null':
                actualFilter = {...actualFilter, friend: null}
                break;
            case 'true':
                actualFilter = {...actualFilter, friend: true}
                break;
            case  'false':
                actualFilter = {...actualFilter, friend: false}
                break;
        }

        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {
        const query: QueryParamsType = {}
        if (!!filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)

        history.push({
            pathname: '/users',
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])

    const followUser = (id: number) => {
        dispatch(follow(id))
    };
    const unfollowUser = (id: number) => {
        dispatch(unfollow(id))
    };
    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    };
    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    };
    let addNewMessage = (values: any) => {
        dispatch(sendUserMessage(receiverId, values.newMessageBody))
        values.newMessageBody = null;
    };

    return (<>
            {isFetching ? <Preloader/> : null}
            <div className={s.usersPage}>
                <div className={s.searchForm}>
                    <UsersSearchForm onFilterChanged={onFilterChanged}/>
                </div>

                <div className={s.paginator}>
                    <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                               totalItemsCount={totalItemsCount} pageSize={pageSize}
                               portionSize={portionSize}/>
                </div>


                <div className={s.users}>
                    {users.map((u) => <User user={u} key={u.id} followingInProgress={followingInProgress}
                                            unfollow={unfollowUser} follow={followUser}
                                            setFormControl={setFormControl} setReceiverId={setReceiverId}
                                            setReceiver={setReceiver} setPhoto={setPhoto} isAuth={isAuth}
                        />
                    )}

                </div>
                {formControl
                    ?
                    <AddMessageUserFormRedux onSubmit={addNewMessage} photo={photo} receiver={receiver}
                                             setFormControl={setFormControl}/>
                    : null}
            </div>
        </>
    );
};
