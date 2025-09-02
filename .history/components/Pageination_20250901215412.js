import React, { useState } from 'react'



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
    <div className={st}>
        <button onClick={previousHandler}>previous</button>
        <p style={{color: page === 1 ? "blue" :'inherit'}}>1</p>
        <p style={{color: page === 2 ? "blue" :'inherit'}} >2</p>
        <p style={{color: page === 3 ? "blue" :'inherit'}}>3</p>
        <button onClick={nextHandler}>next</button>
    </div>
  )
}

export default Pageination