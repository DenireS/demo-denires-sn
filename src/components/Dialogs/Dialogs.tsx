import React, {useState} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import userPhoto from '../../assets/images/User.jpg'
import {DialogChat} from "./DialogChat/DialogChat";
import {useSelector} from "react-redux";
import {getUsers} from "../../redux/dialogs-selectors";
import classNames from "classnames";

type PropsType = {}

export const Dialogs: React.FC<PropsType> = React.memo((props) => {

    const users = useSelector(getUsers)
    const [itemToggle, setItemToggle] = useState('')
    const [itemToggleIcon, setItemToggleIcon] = useState('toggleItems')

    const toggleItems = () => {
        if (itemToggleIcon === 'toggleItems') {
            setItemToggle('active')
            setItemToggleIcon('toggleItemsActive')
        } else {
            setItemToggle('')
            setItemToggleIcon('toggleItems')
        }

    }

    const dialogsElements = users.map((d: any) => (
        <DialogItem name={d.userName} key={d.id} id={d.id} img={d.photos.small || userPhoto}
                    lastDialogActivityDate={d.lastDialogActivityDate} lastUserActivityDate={d.lastUserActivityDate}
                    newMessagesCount={d.newMessagesCount} hasNewMessages={d.hasNewMessages}/>
    ));

    return (
        <div className={s.dialogs}>
            <div className={classNames(s.dialogsItem, s[itemToggle])}>{dialogsElements}</div>
            <div onClick={toggleItems} className={s[itemToggleIcon]}></div>
            <DialogChat users={users} {...props} />
        </div>
    );
})

