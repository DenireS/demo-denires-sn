import React from 'react';
import s from './Login.module.css';
import styles from '../common/FormsControls/FormsControls.module.css';
import {reduxForm, InjectedFormProps} from 'redux-form';
import {required} from '../../utils/validators/validators';
import {FormType, createField} from '../common/FormsControls/FormsControls';
import {connect} from 'react-redux';
import {Logout, Login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from "../../redux/redux-store";

const Input = FormType('input');

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnType> & LoginFormOwnType> = ({handleSubmit, error, captchaURL}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>('Email', 'email', [required], Input)}
            {createField<LoginFormValuesTypeKeys>('Password', 'password', [required], Input, {type: 'password'})}
            {createField<LoginFormValuesTypeKeys>(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, 'Remember Me')}
            {error && <div className={styles.formSummaryError}>{error}</div>}
            {captchaURL && <img src={captchaURL}/>}
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

type MapStateType = {
    isAuth: boolean
    captchaURL: string | null
}
type MapDispatchType = {
    Login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

const LoginAuth: React.FC<MapStateType & MapDispatchType> = (props) => {
    const onSubmit = (formDate: LoginFormValuesType) => {
        props.Login(formDate.email, formDate.password, formDate.rememberMe, formDate.captcha);
    };

    if (props.isAuth) {
        return <Redirect to="/profile"/>;
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
        </div>
    );
};
const mapStateToProps = (state: AppStateType): MapStateType => ({
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL,
});

export default connect(mapStateToProps, {Logout, Login})(LoginAuth);
