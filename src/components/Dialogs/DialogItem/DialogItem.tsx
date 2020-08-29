import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {actions} from "../../../redux/dialogs-reducer";
import {splitMessageDate} from "../../common/DateControls/DateControls";

type PropsType = {
    img: string
    id: number
    name: string
    lastDialogActivityDate: string
    lastUserActivityDate: string
    newMessagesCount: number
}

export const DialogItem: React.FC<PropsType> = React.memo((props) => {

    const dispatch = useDispatch()

    const selectDialog = (id: number) => {
        dispatch(actions.setCurrentChat(id))
    }
    let lastDialogActivityDate = splitMessageDate(props.lastDialogActivityDate)
    let lastUserActivityDate = splitMessageDate(props.lastUserActivityDate)

    return (
        <NavLink to={'/dialogs/' + props.id} activeClassName={s.activeLink}>
            <div className={s.dialog}>
                <NavLink to={'/profile/' + props.id}><img className={s.dialogImg} src={props.img}></img></NavLink>
                <div className={s.dialogInfo} onClick={() => selectDialog(props.id)}>
                    <div className={s.dialogName}>{props.name}</div>
                    <div className={s.lastDialogActivityDate}>Last dialog activity: {lastDialogActivityDate}</div>
                    <div className={s.lastUserActivityDate}>Last user activity: {lastUserActivityDate}</div>
                </div>
            </div>
        </NavLink>
    );
})

