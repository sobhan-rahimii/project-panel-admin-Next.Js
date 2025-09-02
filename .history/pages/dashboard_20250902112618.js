import { useRouter } from "next/router";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "@/services/axios";
import {
  useAddProducts,
  useDeleteProducts,
  useFetchProducts,
  usePageInationPage,
  useSearchProducts,
} from "@/hooks/queries";
import Image from "next/image";
import styles from "../styles/Dashboard.module.css";
import AddProductModal from "@/components/AddProductModal";
import Pageination from "@/components/Pageination";
import DeleteProductModal from "@/components/DeleteProductModal";

function Dashboard() {
  const [search, setSearch] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: "",
  });
  const [page,setPage] = useState(1)
  const [isopenDelete, setIsopendelete] = useState(false)

  const { data: products, isLoading: loading } = useSearchProducts(search);
  console.log({ products });

  const { data, isLoading } = useFetchProducts();
  console.log({ data, isLoading });

  const { mutate } = useAddProducts();
  const submitHandler = async (event) => {
    event.preventDefault();
    
    mutate({
      name: form.name,
      price: form.price,
      quantity: form.quantity,
    });
    setIsOpenModal(false)
  };
  const {data: page1} = usePageInationPage(page)

  const {mutate: deleteProduct} = useDeleteProducts()

  const submitDeleteHandler = async (event)=>{
    event.preventDefault()
    const {mutate: deleteProduct} = useDeleteProducts()
    setIsopendelete(false)


  }

  return (
    <>
      <div>
        <input
          placeholder="جستجو کالا"
          className={styles.search}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Image
          className={styles.icon_search}
          src="/search-normal (1).png"
          width={24}
          height={24}
        />
      </div>
      <div className={styles.flex}>
        <Image
          className={styles.icon}
          src="/setting-3.png"
          width={30}
          height={30}
        />
        <h3 className={styles.title}>مدیرت کالا</h3>
        <button
          onClick={() => setIsOpenModal(true)}
          className={styles.addproduct}
        >
          افزودن محصول
        </button>
      </div>
      <div className={styles.createTable}>
        <table className={styles.trr}>
          <tbody>
            <tr>
              <th className={styles.th1}>نام کالا</th>
              <th className={styles.th2}>موجودی</th>
              <th className={styles.th3}>قیمت</th>
              <th className={styles.th4}>شناسه کالا</th>
              <th></th>
            </tr>
          </tbody>
          {(search ? products?.data : page1?.data||data?.data)?.map((p) => (
            <tr className={styles.tr2}>
              <td className={styles.td1}>{p.name}</td>
              <td className={styles.td2}>{p.quantity}</td>
              <td className={styles.td3}>{p.price}</td>
              <td className={styles.td4}>{p.id}</td>
              <div className={styles.flex1}>
                <td>
                  <button className={styles.btnedit}>
                    <Image
                      className={styles.edit}
                      src="/edit.png"
                      width={20}
                      height={20}
                    />
                    <button onClick={()=> deleteProduct(p.id)} className={styles.btndel}>
                      <Image src="/trash.png" width={20} height={20} />
                    </button>
                  </button>
                </td>
              </div>
            </tr>
          ))}
        </table>
        <AddProductModal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          form={form}
          setForm={setForm}
          submitHandler={submitHandler}
        />
      </div>
      <Pageination page={page} setPage={setPage} />
      <DeleteProductModal isopenDelete={isopenDelete} setIsopendelete={setIsopendelete} />
    </>
  );
}

export default Dashboard;
