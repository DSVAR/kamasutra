import State, {subscribe} from "./Redux/State";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import reportWebVitals from './reportWebVitals';
import {AddMessage, updateMessage} from './Redux/State'

export let rerender=(state)=>{

    ReactDOM.render(

        <React.StrictMode>
            <App appState={state}  updateText={updateMessage} addMessage={AddMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerender(State);
subscribe(rerender)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


