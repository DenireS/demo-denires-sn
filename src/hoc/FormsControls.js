import React from 'react';
import styles from './FormsControls.module.css';

export const FormType = (Element) => ({input, meta: {touched, error}, type, ...props}) => {

    const hasError = touched && error;

    let chooseInputFormat = (type) => {
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
