import React, { useState } from 'react'

function AddProductModal() {
    const [isopenmodal,setIsOpemModal] = useState(false)
    const [form,setForm] = useState({
        name:'',
        price:'',
        quantity:"",
    })
  return (
    <>
        <form>
            <p>ایجاد محصول جدید</p>
            
        </form>
    </>
  )
}

export default AddProductModal