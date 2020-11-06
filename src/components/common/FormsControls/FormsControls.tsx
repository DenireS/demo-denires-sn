import React from 'react';
import styles from './FormsControls.module.css';
import {Field} from "redux-form";
import {FieldValidatorType} from "../../../utils/validators/validators";

export function createField<FormKeysType extends string>(placeholder: string | undefined, name: FormKeysType, validators: Array<FieldValidatorType>,
                                                         component: string | React.ReactNode, props?: any, text = '') {

    return (
        <div>
            <Field
                placeholder={placeholder}
                name={name}
                component={component}
                validate={validators}
                {...props}
            /> <span>{text}</span>
        </div>
    )
}

type FormControlPropsType = {
    input: any
    meta: {
        touched: boolean
        error: string
    }
    type: string | undefined
}
type FormControlType = (params: FormControlPropsType) => React.ReactNode

export const FormType = (Element: string): FormControlType => ({input, meta: {touched, error}, type, ...props}) => {


    let hasError = touched && error;

    let chooseInputFormat = (type: string | undefined) => {
        return <Element {...input} {...props} type={type}/>
    }

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {chooseInputFormat(type)}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    );
};

export type GetStringKeys<T> = Extract<keyof T, string>