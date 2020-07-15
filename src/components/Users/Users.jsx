import React, {useState} from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {Field, reduxForm} from "redux-form";
import AddMessageUserFormRedux from "./UsersMessageForm";


let Users = ({currentPage, onPageChanged, totalItemsCount, pageSize, users, portionSize, ...props}) => {


    let [formControl, setFormControl] = useState(false)
    let [receiver, setReceiver] = useState(null)

    let addNewMessage = (values) => {
        props.sendUserMessage(receiver, values.newMessageBody);
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
                                        setReceiver={setReceiver}/>
                )}

            </div>
            {formControl
                ? <AddMessageUserFormRedux onSubmit={addNewMessage}/>
                : null}
        </div>
    );
};


export default Users;
