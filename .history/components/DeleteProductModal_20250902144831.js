import React from 'react'
import Image from 'next/image'
import styles from "../styles/DeleteProductModal.module.css"

function DeleteProductModal({productId,ondelete,onclose}) {
    const handleDelete = (event)=>{
        event.preventDefault()
        ondelete(productId)
        onclose()

    }
    
  return (

    <div className={styles.back}>
        <form className={styles.form} onSubmit={handleDelete}>
            <Image className={styles.photo} src="/Close.png" width={96} height={97.83} />
            <p className={styles.title}>آیا از حذف این محصول مطمئنید؟</p>
            <div className={styles.flex1}>
                <button className={styles.delete} type='submit'>حذف</button>
                <button className={styles.} onClick={onclose}>لغو</button>
            </div>
        </form>
    </div>
  )
}

export default DeleteProductModal