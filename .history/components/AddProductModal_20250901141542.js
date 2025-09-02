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
            <label>نام کالا</label>
            <input placeholder='نام کالا' / >
            <label>تعداد موجودی</label>
            <input placeholder='تعداد' />
            <label>قیمت</label>
             <input placeholder='قیمت'  />
             <div>
                <button>ایجاد</button>
                <
             </div>
        </form>
    </>
  )
}

export default AddProductModal