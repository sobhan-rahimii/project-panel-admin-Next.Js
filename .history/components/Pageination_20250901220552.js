import React, { useState } from 'react'
import styles from "../styles/Pagination.module.css"



function Pageination({page,setPage}) {
    
    const previousHandler = ()=>{
        if(page<= 1) return
        setPage((page)=> page - 1)

    }
    const nextHandler = ()=>{
        if(page >= 3) return
        setPage((page)=> page + 1)

    }
  return (
    <div className={styles.flex}>
        <button onClick={nextHandler}>next</button>
        <p className={styles.page3} style={{color: page === 3 ? "blue" :'inherit'}}>3</p>
        <p className={styles.page2} style={{color: page === 2 ? "blue" :'inherit'}} >2</p>
        <p className={styles.page1} style={{color: page === 1 ? "blue" :'inherit'}}>1</p>
        <button className={} onClick={previousHandler}>previous</button>
    </div>
  )
}

export default Pageination