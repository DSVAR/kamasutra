
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store'
import StoreContext from "./Store-Context";

export let rerender=(state)=>{

    ReactDOM.render(

        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerender(store.getState());

store.subscribe(()=>{
    let state=store.getState();
    rerender(state);
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


