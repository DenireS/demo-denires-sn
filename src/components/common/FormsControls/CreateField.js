import React from 'react';
import styles from './CreateField.module.css';
import {Field} from "redux-form";


export const createField = (placeholder, name, validators, component, props, text = '') =>
    (<div>
        <Field
            placeholder={placeholder}
            name={name}
            component={component}
            validate={validators}
            {...props}
        /> {text}
    </div>)
