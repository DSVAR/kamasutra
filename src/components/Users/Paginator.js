import React,{useState} from "react";
import styles from './User.Module.css';

let Paginator = ({totalItem, pageSize, currentPage,onPageChanged, portionSize=10},props) => {
   let pageCount = Math.ceil(totalItem / pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }


    let portionCount=Math.ceil(pageCount/portionSize)
    let [portionNumer,setPortionNumber]= useState(1);
  
    let leftPortionPageNumber=(portionNumer-1)*portionSize+1;
    let rightPortionPageNumber=portionNumer*portionSize;

    return (

        <div className={styles.main_View}>
            {portionNumer>1 &&
            <button onClick={()=>setPortionNumber(portionNumer-1)}>left</button> }
            
            {pages
                .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map((p) => {
                return <span className={styles.pageNumber}
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
           
           {portionCount>portionNumer && 
           <button onClick={()=>setPortionNumber(portionNumer+1)}>right</button>}
        </div>
    )
}

export default Paginator