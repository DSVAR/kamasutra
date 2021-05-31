import React from "react";
import Classes from './User.Module.css';


let Paginator = (props) => {
   let pageCount = Math.ceil(props.totalUser / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (

        <div className={Classes.main_View}>

            {pages.map(p => {
                return <span className={props.curentPage == p && Classes.pageNumber}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>
                 {p}</span>
            })}
           
        </div>
    )
}

export default Paginator