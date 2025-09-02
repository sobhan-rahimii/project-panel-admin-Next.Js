import React, { useState } from 'react'



function Pageination() {
    const [page,setPage] = useState(1)
    const previousHandler = ()=>{

    }
    const next
  return (
    <div>
        <button onClick={previousHandler}>previous</button>
        {page}
        <button onClick={nextHandler}>next</button>
    </div>
  )
}

export default Pageination