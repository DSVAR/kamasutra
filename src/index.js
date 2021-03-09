import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import reportWebVitals from './reportWebVitals';

let users=[
    {ID:'0',Name:'DDvar',Url:'https://avatars.mds.yandex.net/get-zen_doc/985972/pub_5d63ef4cf73d9d00adeba678_5d63f06bf73d9d00adeba67e/scale_1200'},
    {ID:'1', Name: "RAtataat",Url:'https://i.ytimg.com/vi/iVFmoi6N9B0/maxresdefault.jpg' }
];

let messages=[
    {ID:0, Nick:"Me",Message:"Hello"},
    {ID:1,Nick:"DDvar",Message:"Hi,How are u?"}
]

ReactDOM.render(
  <React.StrictMode>
    <App user={users} message={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


