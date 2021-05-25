import React from 'react'
import preLoaderGif from './../../../Images/loading.gif';
import Classes from './Style.Module.css';

let Preloader = (props) => {
debugger;
    return (
        
        <div>
            {props.isFetching ? <img className={Classes.sizeLoader} src={preLoaderGif}/> : null}
        </div>)
}
export default Preloader;