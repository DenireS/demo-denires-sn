import React, {useState} from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {Field, reduxForm} from "redux-form";
import AddMessageUserFormRedux from "../common/MessageForm/UsersMessageForm";


let Users = ({currentPage, onPageChanged, totalItemsCount, pageSize, users, portionSize, ...props}) => {


    let [formControl, setFormControl] = useState(false)
    let [receiverId, setReceiverId] = useState(null)
    let [receiver, setReceiver] = useState(null)
    let [photo, setPhoto] = useState(null)

    let addNewMessage = (values) => {
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
                                        setCurrentUser={props.setCurrentUser} setFormControl={setFormControl}
                                        setReceiverId={setReceiverId} setReceiver={setReceiver} setPhoto={setPhoto}
                    />
                )}

            </div>
            {formControl
                ? <AddMessageUserFormRedux onSubmit={addNewMessage} photo={photo} receiver={receiver}
                                           setFormControl={setFormControl}/>
                : null}
        </div>
    );
};


export default Users;
