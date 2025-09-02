import api from "@/services/axios";
import { useMutation, useQuery } from "@tanstack/react-query";

const useFetchProducts = () => {
  const fetchProducts = async () => {
    const res = await api.get("products");
    return res.data;
  };
  return useQuery(["products"], fetchProducts, { refetchInterval: 1 * 1000 });
};

const useAddProducts = () => {
  const addProduct = async (newProduct) => {
    const res = await api.post("products", newProduct);
    return res.data;
  };
  return useMutation(addProduct);
};

const useSearchProducts = (name)=>{
    const fetchSearchProducts = async()=>{
        const res = await api.get(`products?name=${name}`)
        return res.data
    }
    return useQuery(["products",name],fetchSearchProducts)

}
const usePageInationPage = (page)=>{
  const fetchPageinationProducts = async()=>{
    const res = await api.get(`products?page=${page}&limit=10`)
    return res.data
  }
  return useQuery(["products",page] ,fetchPageinationProducts)
}

const useDeleteProducts = ()=>{
  const deleteProduct = async ()=>{
    const res = await api.delete("products/3fa85f64-5717-4562-b3fc-2c963f66afa6")
  }
}

export {useFetchProducts,useAddProducts,useSearchProducts, usePageInationPage}