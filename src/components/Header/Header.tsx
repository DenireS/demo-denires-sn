import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getIsAuth, getLogin} from "../../redux/auth-selectors";
import {Logout} from "../../redux/auth-reducer";

export const HeaderPage: React.FC = (props) => {

    const isAuth = useSelector(getIsAuth)
    const login = useSelector(getLogin)

    const dispatch = useDispatch()

    const LogoutUser = () => {
        dispatch(Logout())
    }


    return (
        <header className={s.header}>
            <div className={s.loginBlock}>
                {isAuth ? (
                    <div className={s.authUser}>
                        <span className={s.userName}>{login}</span>
                        <button onClick={LogoutUser}>Logout</button>
                        {' '}
                    </div>
                ) : (
                    <NavLink to={'/login'}>Login</NavLink>
                )}
            </div>
        </header>
    );
}

