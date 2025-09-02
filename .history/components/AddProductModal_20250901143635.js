import { useAddProducts } from "@/hooks/queries";
import React, { useState } from "react";
import styles from "../styles/AddProductModal.module.css"

function AddProductModal({isOpenModal,setIsOpenModal,form,setForm,submitHandler}) {
  
    if(!isOpenModal) return
 

  
  return (
    <>
      <div>
        <form className={styles.form} onSubmit={submitHandler}>
          <p >ایجاد محصول جدید</p>
          <label>نام کالا</label>
          <input placeholder="نام کالا" />
          <label>تعداد موجودی</label>
          <input placeholder="تعداد" />
          <label>قیمت</label>
          <input placeholder="قیمت" />
          <div>
            <button type="submit">ایجاد</button>
            <button onClick={()=>setIsOpenModal(false)}>انصراف</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProductModal;
