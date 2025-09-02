const  getCookie = (cookieName)=>{
    return document.cookie
    .split(";")
    .find((token)=>token.trim().split("=")[0]=== cookieName)
    ?.split("=")[1]
}

const setCookie = (tokens) => {
    document.cookie = `token=${tokens.token}; max-age=${
        1 * 24 * 60 * 60
    }`;
    
    
};


export{getCookie,setCookie}