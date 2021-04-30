import React from 'react'
import preLoaderGif from './../../../Images/loading.gif';

let Preloader=(props)=>{
    
     return (
        
     <div
        >{props.isFetching ? <img src={preLoaderGif}/> : null}
     </div>)
}
export default Preloader;