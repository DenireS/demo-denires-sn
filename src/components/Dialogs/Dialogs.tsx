import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import userPhoto from '../../assets/images/User.jpg'
import {DialogChat} from "./DialogChat";
import {useSelector} from "react-redux";
import {getUsers} from "../../redux/dialogs-selectors";

type PropsType = {}

export const Dialogs: React.FC<PropsType> = React.memo((props) => {

    const users = useSelector(getUsers)

    const dialogsElements = users.map((d: any) => (
        <DialogItem name={d.userName} key={d.id} id={d.id} img={d.photos.small || userPhoto}
                    lastDialogActivityDate={d.lastDialogActivityDate} lastUserActivityDate={d.lastUserActivityDate}
                    newMessagesCount={d.newMessagesCount}/>
    ));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__item}>{dialogsElements}</div>
            <DialogChat users={users} {...props} />
        </div>


    );
})

