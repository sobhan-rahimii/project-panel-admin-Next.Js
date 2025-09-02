import React, { useState } from 'react'



function Pageination() {
    const [page,setPage] = useState(1)
    const previousHandler = ()=>{
        if(page<= 1) return
        setPage((page)=> page - 1)

    }
    const nextHandler = ()=>{
        if(page >= 3) return
        setPage((page)=> page + 1)

    }
  return (
    <div>
        <button onClick={previousHandler}>previous</button>
        <p style={{color: page === 1 ? }}>1</p>
        <p>2</p>
        <p>3</p>
        <button onClick={nextHandler}>next</button>
    </div>
  )
}

export default Pageination