const  getCookie = (cookieName)=>{
    return document.cookie
    .split(";")
    .find((token)=>token.trim().split("=")[0]=== cookieName)
    ?.split("=")[1]
}

export{getCookie}

