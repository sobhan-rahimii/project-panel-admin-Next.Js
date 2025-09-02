import { useAddProducts } from "@/hooks/queries";
import React, { useState } from "react";

function AddProductModal() {
  const [isopenmodal, setIsOpemModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: "",
  });
  const {mutate} = useAddProducts()
  return (
    <>
      <div>
        <form>
          <p>ایجاد محصول جدید</p>
          <label>نام کالا</label>
          <input placeholder="نام کالا" />
          <label>تعداد موجودی</label>
          <input placeholder="تعداد" />
          <label>قیمت</label>
          <input placeholder="قیمت" />
          <div>
            <button type="submit">ایجاد</button>
            <button onClick={}>انصراف</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProductModal;
