import React, { useState } from 'react'



function Pageination() {
    const [page,setPage] = useState(1)
  return (
    <div>
        <button onClick={previousHandler}>previous</button>
        {page}
        <button onc>next</button>
    </div>
  )
}

export default Pageination