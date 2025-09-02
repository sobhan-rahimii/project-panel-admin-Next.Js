import axios from "axios";
import setCookie from "@/utils/cooki";
import {
  parseCookie,
  parseSetCookie,
} from "next/dist/compiled/@edge-runtime/cookies";
import { getCookie } from "./cookie";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


api.interceptors.request.use((request)=>{
    const token = getCookie("a")
    if(token){
        request.headers["Authorization"] = `Bearer ${token}`
    }
    return request
},
(error)=>{
    return Promise.reject(error)
})

export default api;
