import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import reportWebVitals from './reportWebVitals';
import {AddMessage, updateMessage} from './Redux/State'

//AddMessage("pider")

export let rerender=(state)=>{

    ReactDOM.render(
        <React.StrictMode>
            <App appState={state}  updateText={updateMessage} addMessage={AddMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


