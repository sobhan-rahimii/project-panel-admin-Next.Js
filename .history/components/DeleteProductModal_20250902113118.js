import React from 'react'
import Image from 'next/image'

function DeleteProductModal({isopenDelete,setIsopendelete,submitDeleteHandler}) {
  return (
    {!}
    <div>
        <form onSubmit={submitDeleteHandler}>
            <Image src="/Close.png" width={96} height={97.83} />
            <p>آیا از حذف این محصول مطمئنید؟</p>
            <div>
                <button type='submit'>حذف</button>
                <button>لغو</button>
            </div>
        </form>
    </div>
  )
}

export default DeleteProductModal