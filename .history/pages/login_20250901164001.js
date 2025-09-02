import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import Image from "next/image";
import Link from "next/link";
import { loginn } from "@/services/auth";
import { useRouter } from "next/router";
import { getCookie } from "@/services/cookie";
import { setCookie } from "nookies";



function Login() {
  const [username, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const router = useRouter()
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {response,error} = await loginn (username, password );
      console.log({ response, error });
     if(response.data?.token){
      setCookie("token", response.data.token,to)
     }
      
      if (response?.status === 200 )  {
        
        
        return router.push("/dashboard");
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    }
  };
  return (
    <div className={styles.matn}>
      <p>بوت کمپ بوتو استارت</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.flex}>
          <Image
            className={styles.photo}
            src="/union.png"
            width={80}
            height={84.47}
          />
          <p className={styles.title}>فرم ثبت نام</p>
        </div>
        <div className={styles.inputs}>
          <input
            className={styles.input1}
            placeholder="نام کاربری"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />

          <input
            className={styles.input2}
            placeholder="رمزعبور"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />

          <button className={styles.login} type="submit">
            ثبت نام
          </button>
          <Link className={styles.createaccount} href="/login">
            حساب کاربری دارید؟
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
