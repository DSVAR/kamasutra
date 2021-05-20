import React from "react";

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
          <LoginForm/>
        </div>
    )
}


const LoginForm = () => {
    return (

        <form>
            <div>
                <input placeholder={'Login'}/>
            </div>

            <div>
                <input type={'password'} placeholder={'password'}/>
            </div>

            <div>
                <input type={'checkbox'}/>remember me?
            </div>

            <div>
                <button>ENTER</button>
            </div>
        </form>
       
    )
}
export default Login;