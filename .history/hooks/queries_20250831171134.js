import api from "@/services/axios"
import { useQuery } from "@tanstack/react-query"



const useFetchProducts = ()=>{
    const fetchProducts = async()=>{
        const res = await api.get("products")
        return res.data
    }
    return useQuery(["products"],fetchProducts, {refetchInterval:1*1000})
}


const useAddProducts = ()=>{
    const addProduct = async(new)=>{

    }
}