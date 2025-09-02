import React, { useState } from 'react'



function Pageination() {
    const [page,setPage] = useState(1)
  return (
    <div>
        <button onClick={}}>previous</button>
        {page}
        <button>next</button>
    </div>
  )
}

export default Pageination