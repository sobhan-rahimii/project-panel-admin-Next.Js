import React, { useState } from 'react'



function Pageination() {
    const [page,setPage] = useState(1)
    const previousHandler = ()=>{
        setPage((page)=> page - 1)

    }
    const nextHandler = ()=>{}
  return (
    <div>
        <button onClick={previousHandler}>previous</button>
        {page}
        <button onClick={nextHandler}>next</button>
    </div>
  )
}

export default Pageination