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
const usePageInationPage = ()=>{
  const fetchPageinationProducts = async()=>{
    const res = await api.get("products?page=3&limit=10")
    return res.data
  }
  return usequ
}

export {useFetchProducts,useAddProducts,useSearchProducts}