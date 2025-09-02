import { useAddProducts } from "@/hooks/queries";
import React, { useState } from "react";
import styles from "../styles/AddProductModal.module.css"

function AddProductModal({isOpenModal,setIsOpenModal,form,setForm,submitHandler}) {
  
    if(!isOpenModal) return
 

  
  return (
    <>
      <div className={styles.back}>
        <form className={styles.form} onSubmit={submitHandler}>
          <p className={styles.title}>ایجاد محصول جدید</p>
          <label className={styles.label1}>نام کالا</label>
          <input value={form.name} className={styles.input1}  placeholder="نام کالا" />
          <label className={styles.label2}>تعداد موجودی</label>
          <input value={} className={styles.input2} placeholder="تعداد" />
          <label className={styles.lable3}>قیمت</label>
          <input className={styles.input3} placeholder="قیمت" />
          <div >
            <button className={styles.add} type="submit">ایجاد</button>
            <button className={styles.cancel} onClick={()=>setIsOpenModal(false)}>انصراف</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProductModal;
