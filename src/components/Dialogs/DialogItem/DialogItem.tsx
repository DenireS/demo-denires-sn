import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {actions} from "../../../redux/dialogs-reducer";


export const DialogItem=(props:any) => {

    const dispatch= useDispatch()

    let selectDialog = () => {
        dispatch(actions.setCurrentChat(props.id))
    }

    return (
        <div className={s.dialog}>
            <img src={props.img}></img>
            <div className={s.dialog__name} onClick={() => selectDialog()}>
                <NavLink to={'/dialogs/' + props.id} activeClassName={s.activeLink}>
                    {props.name}
                </NavLink>
            </div>
        </div>
    );
}

