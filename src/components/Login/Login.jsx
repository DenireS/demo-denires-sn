import React from 'react';
import s from './Login.module.css';
import {reduxForm, Field} from 'redux-form';
import {required} from '../../utils/validators/validators';
import {FormType} from '../../hoc/FormsControls';
import {connect} from 'react-redux';
import {Logout, Login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {createField} from "../common/FormsControls/CreateField";

const Input = FormType('input');

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'Remember Me')}
            {error && <div className={s.authError}>{error}</div>}
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
        props.Login(formDate.email, formDate.password, formDate.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to="/profile"/>;
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {Logout, Login})(LoginAuth);
