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
        <p>1</p>
        <p>2</p>
        <button onClick={nextHandler}>next</button>
    </div>
  )
}

export default Pageination