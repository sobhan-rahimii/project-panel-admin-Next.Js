import React, { useState } from 'react'



function Pageination() {
    const [page,setPage] = useState(1)
  return (
    <div>
        <button></button>
        {page}
    </div>
  )
}

export default Pageination