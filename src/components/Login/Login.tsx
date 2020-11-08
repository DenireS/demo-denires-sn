import React from 'react';
import s from './Login.module.css';
import styles from '../common/FormsControls/FormsControls.module.css';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {required} from '../../utils/validators/validators';
import {createField, FormType} from '../common/FormsControls/FormsControls';
import {useDispatch, useSelector} from 'react-redux';
import {Login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {getCaptchaURL, getIsAuth} from "../../redux/auth-selectors";

const Input = FormType('input');

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnType> & LoginFormOwnType> = ({handleSubmit, error, captchaURL}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>('Email', 'email', [required], Input)}
            {createField<LoginFormValuesTypeKeys>('Password', 'password', [required], Input, {type: 'password'})}
            {createField<LoginFormValuesTypeKeys>(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, 'Remember Me')}
            {error && <div className={styles.formSummaryError}>{error}</div>}
            {captchaURL && <img alt={''} src={captchaURL}/>}
            {captchaURL && createField<LoginFormValuesTypeKeys>('Write correct symbols', 'captcha', [required], Input)}

            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnType>({
    form: 'login',
})(LoginForm);

type LoginFormValuesType = {
    email: string, password: string, rememberMe: boolean, captcha: string
}

type LoginFormOwnType = {
    captchaURL: string | null
}
type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>

export const LoginPage: React.FC = (props) => {

    const isAuth = useSelector(getIsAuth)
    const captchaURL = useSelector(getCaptchaURL)

    const dispatch = useDispatch()

    const onSubmit = (formDate: LoginFormValuesType) => {
        dispatch(Login(formDate.email, formDate.password, formDate.rememberMe, formDate.captcha))
    };

    if (isAuth) {
        return <Redirect to="/profile"/>;
    }

    return (
        <div className={s.loginPage}>
            <div className={s.loginForm}>
                <div className={s.loginTitle}>Login</div>
                <LoginReduxForm onSubmit={onSubmit} captchaURL={captchaURL}/>
                <a className={s.registrationLink} href={'https://social-network.samuraijs.com/signUp'}
                   rel={"noopener noreferrer"} target={'_blank'}>Redirect to registration</a>
            </div>


            <div className={s.siteInfo}>
                <div className={s.authorInfo}>This app is made by Oleksandr Khalevkyi who learn React and wants to work
                    on it in the future.
                    There is a remote server to work with data -
                    <a href={'https://social-network.samuraijs.com'}
                       rel={"noopener noreferrer"}
                       target={'_blank'}>https://social-network.samuraijs.com/</a>
                </div>
                <div className={s.contactsTitle}>
                    <div className={s.contacts}>
                        <div className={s.gitHub}><b className={s.contactName}>GitHub:</b> <a
                            href={'https://github.com/DenireS'}
                            rel={"noopener noreferrer"}
                            target={'_blank'}>https://github.com/DenireS</a>
                        </div>
                        <div className={s.gmail}><b className={s.contactName}>Gmail:</b> everlastingmad@gmail.com
                        </div>
                        <div className={s.telNum}><b className={s.contactName}>Tel:</b>+380636737016</div>
                    </div>
                </div>

            </div>
        </div>
    );
};