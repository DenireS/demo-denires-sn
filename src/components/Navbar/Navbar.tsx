import React, {useState} from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import home from '../../assets/icons/home.png'
import messages from '../../assets/icons/messages.png'
import users from '../../assets/icons/users.png'
import login from '../../assets/icons/login.png'
import classNames from "classnames";

const Navbar = () => {

    const [state, setState] = useState(true)
    const [navbar, setNavbar] = useState('')
    const [navToggle, setNavToggle] = useState("")

    const toggleMenu = (state: boolean) => {
        if (state) {
            setNavbar('active')
            setNavToggle('active')
            setState(false)
        } else {
            setNavbar('')
            setNavToggle('')
            setState(true)
        }

    }
    return (<>
            <nav className={classNames(s.nav, s[navbar])}>
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
            <button onClick={() => toggleMenu(state)} className={classNames(s.nav_toggle, s[navToggle])}
                    type="button">
                <span className={s.nav_toggle__item}>Menu</span>
            </button>

        </>

    );
}

export default Navbar;
