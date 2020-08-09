import React, {useEffect, useState} from 'react';
import {Paginator} from "../common/Paginator/Paginator";
import User from "./User";
import {AddMessageUserFormRedux} from "../common/MessageForm/UsersMessageForm";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType, requestUsers, follow, unfollow} from "../../redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getPortionSize, getTotalItemsCount,
    getUsers,
    getUsersFilter
} from "../../redux/users-selectors";
import {sendUserMessage} from "../../redux/dialogs-reducer";

type PropsType = {}

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

    const dispatch = useDispatch();

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

    return (

        <div>
            <div>
                <UsersSearchForm onFilterChanged={onFilterChanged}/>
            </div>

            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalItemsCount} pageSize={pageSize} portionSize={portionSize}/>
            <div>
                {users.map((u) => <User user={u} key={u.id} followingInProgress={followingInProgress}
                                        unfollow={unfollowUser} follow={followUser}
                                        setFormControl={setFormControl} setReceiverId={setReceiverId}
                                        setReceiver={setReceiver} setPhoto={setPhoto}
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