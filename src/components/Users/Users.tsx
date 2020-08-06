import React, {useState} from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import AddMessageUserFormRedux from "../common/MessageForm/UsersMessageForm";
import {UsersType} from "../../types/types";

type PropsType = {
    currentPage: number,
    totalItemsCount: number,
    pageSize: number,
    portionSize: number,

    users: Array<UsersType>,
    followingInProgress: Array<number>

    onPageChanged: (pageNumber: number) => void,
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    sendUserMessage: (id: number, body: any) => void
}

let Users: React.FC<PropsType> = ({currentPage, onPageChanged, totalItemsCount, pageSize, users, portionSize, ...props}) => {


    let [formControl, setFormControl] = useState(false)
    let [receiverId, setReceiverId] = useState(0)
    let [receiver, setReceiver] = useState<string | null>(null)
    let [photo, setPhoto] = useState<string | null>(null)

    let addNewMessage = (values: any) => {
        props.sendUserMessage(receiverId, values.newMessageBody);
        values.newMessageBody = null;
    };

    return (

        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalItemsCount} pageSize={pageSize} portionSize={portionSize}/>
            <div>
                {users.map((u) => <User user={u} key={u.id} followingInProgress={props.followingInProgress}
                                        unfollow={props.unfollow} follow={props.follow}
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


export default Users;
