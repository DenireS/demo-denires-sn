import React from 'react';
import s from './Login.module.css';
import styles from '../../hoc/FormsControls.module.css';
import {reduxForm, Field} from 'redux-form';
import {required} from '../../utils/validators/validators';
import {FormType} from '../../hoc/FormsControls';
import {connect} from 'react-redux';
import {Logout, Login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {createField} from "../common/FormsControls/CreateField";

const Input = FormType('input');

const LoginForm = ({handleSubmit, error, captchaURL}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'Remember Me')}
            {error && <div className={styles.formSummaryError}>{error}</div>}
            {captchaURL && <img src={captchaURL}/>}
            {captchaURL && createField('Write correct symbols', 'captcha', [required], Input) }

            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);

const LoginAuth = (props) => {
    const onSubmit = (formDate) => {
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
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL,
});

export default connect(mapStateToProps, {Logout, Login})(LoginAuth);
