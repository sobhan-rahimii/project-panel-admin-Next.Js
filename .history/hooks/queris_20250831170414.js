import api from "@/services/axios"



const rEgister = async(username,password,tpassword)=>{
    const res = await api.post("auth/register",{username,password,tpassword})
    return res.data

}

export re
