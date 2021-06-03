import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControl/FormsControl";
import {minLenght, requiredField} from "../../utils/validators/validators";
import  style from './../common/FormsControl/FormControl.Module.css'

const minLenght1=minLenght(5);

const LoginForm = ({handleSubmit,error}) => {
    return (

        <form onSubmit={handleSubmit}>
            {createField('email','Login',[requiredField, minLenght1],Input)}       
            {createField('password','password',[requiredField, minLenght1],Input,'password')}
       

            { error && <div className={style.formError}>
                {error }
            </div>}
            {createField('rember','',[],Input,'checkbox','remember me?')}
        

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

    const onSubmit=async(formData)=>{
     await props.entering(formData.email,formData.password,formData.rember)
     await props.authentication();
    }
    return (
        <div>
            <h1>Login</h1>
          <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}


export default Login;