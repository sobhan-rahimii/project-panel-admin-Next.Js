import api from "@/services/axios"



const useFetchProducts = ()=>{
    const fetchProducts = async()=>{
        const res = await api.get("products")
        return res.data
    }
    return
}
