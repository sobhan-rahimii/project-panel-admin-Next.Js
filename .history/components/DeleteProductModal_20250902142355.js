import React from 'react'
import Image from 'next/image'

function DeleteProductModal({productId,ondelete,onclose}) {
    const handleDelete = ()=>{
        
    }
    
  return (

    <div>
        <form onSubmit={handledelete}>
            <Image src="/Close.png" width={96} height={97.83} />
            <p>آیا از حذف این محصول مطمئنید؟</p>
            <div>
                <button type='submit'>حذف</button>
                <button onClick={()=> setIsopendelete(false)}>لغو</button>
            </div>
        </form>
    </div>
  )
}

export default DeleteProductModal