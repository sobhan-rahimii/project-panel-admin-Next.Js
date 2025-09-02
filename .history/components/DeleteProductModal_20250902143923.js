import React from 'react'
import Image from 'next/image'
import styles from "./"

function DeleteProductModal({productId,ondelete,onclose}) {
    const handleDelete = (event)=>{
        event.preventDefault()
        ondelete(productId)
        onclose()

    }
    
  return (

    <div className={sty}>
        <form onSubmit={handleDelete}>
            <Image src="/Close.png" width={96} height={97.83} />
            <p>آیا از حذف این محصول مطمئنید؟</p>
            <div>
                <button type='submit'>حذف</button>
                <button onClick={onclose}>لغو</button>
            </div>
        </form>
    </div>
  )
}

export default DeleteProductModal