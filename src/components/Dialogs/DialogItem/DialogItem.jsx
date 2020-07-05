import React from 'react';
import s from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

function DialogItem(props) {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog}>
      <img src={props.img}></img>
      <div className={s.dialog__name}><NavLink to={path} activeClassName={s.activeLink}>
      {props.name}
      </NavLink></div>  
    </div>
  );
}

export default DialogItem;
