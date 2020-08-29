import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {useSelector} from "react-redux";
import {getSideBarStatus} from "../../redux/sidebar-selectors";
import home from '../../assets/icons/home.png'
import messages from '../../assets/icons/messages.png'
import users from '../../assets/icons/users.png'
import login from '../../assets/icons/login.png'

const Navbar = () => {

    const sideBarStatus = useSelector(getSideBarStatus)
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>
                    <div className={s.itemImg}><img src={home}/></div>
                    <div className={s.itemInfo}>Profile</div>

                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>
                    <div className={s.itemImg}><img src={messages}/></div>
                    <div className={s.itemInfo}>Messages</div>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.activeLink}>
                    <div className={s.itemImg}><img src={users}/></div>
                    <div className={s.itemInfo}>Users</div>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/login" activeClassName={s.activeLink}>
                    <div className={s.itemImg}><img src={login}/></div>
                    <div className={s.itemInfo}>Login</div>
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
