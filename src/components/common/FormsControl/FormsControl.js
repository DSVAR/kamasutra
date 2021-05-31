import React from "react";
import styles from "./FormControl.Module.css";
import {requiredField} from "../../../utils/validators/validators";
import {Field} from "redux-form";


const FormControl = ({input, meta, child, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea  {...restProps} {...input}/></FormControl>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input  {...restProps} {...input}/></FormControl>
}

export const createField = (name, placeholder, validators, component,type='string',text=null) => (
    <div>
        <Field name={name} placeholder={placeholder} validate={validators} type={type} component={component}/>{text}
    </div>
)

