import React from 'react'
import Image from 'next/image'

function DeleteProductModal() {
  return (
    <div>
        <form>
            <Image src="/Close.png" width={96} height={97.83} />
            <p>آیا از حذف این محصول مطمئنید؟</p>
            
        </form>
    </div>
  )
}

export default DeleteProductModal