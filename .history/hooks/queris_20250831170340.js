import api from "@/services/axios"

api

const rEgister = async(username,password,tpassword)=>{
    const res = await api.post("auth/register",{username,password,tpassword})
    res

}