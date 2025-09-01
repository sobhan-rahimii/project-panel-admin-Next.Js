import React from "react";

function login() {
    const [username,setUserName]
  return (
    <div className={styles.matn}>
      <p>بوت کمپ بوتو استارت</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
          <input className={styles.input1} placeholder="نام کاربری" />

          <input className={styles.input2} placeholder="رمزعبور" />

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

export default login;
