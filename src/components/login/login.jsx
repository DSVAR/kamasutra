import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsControl";
import {minLenght, requiredField} from "../../utils/validators/validators";


const minLenght1=minLenght(5);

const LoginForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} placeholder={'Login'}  validate={[requiredField, minLenght1]} component={Input}/>
            </div>

            <div>
                <Field name={'password'}  type={'password'}  validate={[requiredField, minLenght1]} placeholder={'password'} component={Input} />
            </div>

            <div>
                <Field name={'rember'}  type={'checkbox'}  validate={[requiredField, minLenght1]}  component={Input}/>remember me?
            </div>

            <div>
                <button>ENTER</button>
            </div>
        </form>

    )
}

const ReduxLoginForm=reduxForm({
    form:'login'
})(LoginForm)

const Login = (props) => {

    const onSubmit=(formData)=>{
        props.entering(formData.email,formData.password,formData.rember)
    }
    return (
        <div>
            <h1>Login</h1>
          <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}


export default Login;