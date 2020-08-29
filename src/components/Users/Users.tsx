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
    getFollowingInProgress,
    getPageSize,
    getPortionSize,
    getTotalItemsCount,
    getUsers,
    getUsersFilter
} from "../../redux/users-selectors";
import {sendUserMessage} from "../../redux/dialogs-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getIsAuth} from "../../redux/auth-selectors";

type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType>;

export const Users: React.FC<PropsType> = (props) => {

    let [formControl, setFormControl] = useState(false);
    let [receiverId, setReceiverId] = useState(0);
    let [receiver, setReceiver] = useState<string | null>(null);
    let [photo, setPhoto] = useState<string | null>(null);

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter))
    }, [])

    const users = useSelector(getUsers);
    const portionSize = useSelector(getPortionSize);
    const pageSize = useSelector(getPageSize);
    const totalItemsCount = useSelector(getTotalItemsCount);
    const currentPage = useSelector(getCurrentPage);
    const followingInProgress = useSelector(getFollowingInProgress);
    const filter = useSelector(getUsersFilter);
    const isAuth = useSelector(getIsAuth);
    const dispatch = useDispatch()

    const followUser = (id: number) => {
        dispatch(follow(id))
    };
    const unfollowUser = (id: number) => {
        dispatch(unfollow(id))
    };
    const onPageChanged = (pageNumber: number) => {
        // @ts-ignore
        dispatch(requestUsers(pageNumber, pageSize, filter))
    };
    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    };
    let addNewMessage = (values: any) => {
        dispatch(sendUserMessage(receiverId, values.newMessageBody))
        values.newMessageBody = null;
    };

    return (

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
                {users.map((u) => <User user={u} key={u.id}followingInProgress={followingInProgress}
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
    );
};

export const WrappedUsers = withRouter(Users)