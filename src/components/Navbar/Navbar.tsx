import React, {useState} from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import home from '../../assets/icons/home.png'
import messages from '../../assets/icons/messages.png'
import users from '../../assets/icons/users.png'
import login from '../../assets/icons/login.png'
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {getIsAuth} from "../../redux/auth-selectors";
import {Logout} from '../../redux/auth-reducer';

const Navbar = () => {

    const isAuth = useSelector(getIsAuth)
    const dispatch = useDispatch()

    const [state, setState] = useState(true)
    const [navbar, setNavbar] = useState('')
    const [navToggle, setNavToggle] = useState("")


    const logoutUser = () => {
        dispatch(Logout())
    }

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
                        <div className={s.itemImg}><img alt={''} src={home}/></div>
                        <div className={s.itemInfo}>Profile</div>

                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.activeLink}>
                        <div className={s.itemImg}><img alt={''} src={messages}/></div>
                        <div className={s.itemInfo}>Messages</div>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users" activeClassName={s.activeLink}>
                        <div className={s.itemImg}><img alt={''} src={users}/></div>
                        <div className={s.itemInfo}>Users</div>
                    </NavLink>
                </div>
                <div className={s.item}>
                    {!isAuth ? <NavLink to="/login" activeClassName={s.activeLink}>
                            <div className={s.itemImg}><img alt={''} src={login}/></div>
                            <div className={s.itemInfo}>Login</div>
                        </NavLink>
                        : <NavLink onClick={() => logoutUser()} to="/login">
                            <div className={s.itemImg}><img alt={''} src={login}/></div>
                            <div className={s.itemInfo}>Logout</div>
                        </NavLink>}
                </div>

            </nav>
            <button onClick={() => toggleMenu(state)} className={classNames(s.navToggle, s[navToggle])}
                    type="button">
                <span className={s.navToggleItem}>Menu</span>
            </button>

        </>

    );
}

export default Navbar;
