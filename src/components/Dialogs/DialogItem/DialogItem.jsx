import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';


function DialogItem(props) {
    let selectDialog = () => {
        props.setCurrentChat(props.id)
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

export default DialogItem;
