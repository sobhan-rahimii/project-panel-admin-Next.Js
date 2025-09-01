import React from 'react'

function login() {
  return (
    <div className={styles.matn}>
      <p>بوت کمپ بوتو استارت</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.img_title}>
          <Image
            className={styles.img}
            src="/union.png"
            width={80}
            height={84.47}
          />
          <p className={styles.title}>فرم ثبت نام</p>
        </div>
        <div className={styles.inputs}>
          <input
            {...register("username", {
              required: "یوزرنیم را وارد کنید",
              minLength: {
                value: 4,
                message: "حدااقل 4 کارکتر وارد کنید",
              },
            })}
            className={styles.input1}
            placeholder={
              errors.username ? errors.username.message : "نام کاربری"
            }
          />

          <input
            {...register("password", {
              required: "پسورد را وارد کنید",
              minLength: {
                value: 8,
                message: "حدااقل 8 کاراکتر وارد کنید",
              },
            })}
            className={styles.input2}
            placeholder={errors.password ? errors.password.message : "رمزعبور"}
          />

          <input
            {...register("tpassword", {
              required: "تکرار پسورد الزامی است",
              maxLength: {
                value: 8,
                message: "تکرار پسورد باید 8 کاراکتر باشد",
              },
            })}
            className={styles.input3}
            placeholder={
              errors.tpassword ? errors.tpassword.message : "تکرار رمز عبور"
            }
          />

          <button className={styles.btn} type="submit">
            ثبت نام
          </button>
          <Link className={styles.account} href="/login">
            حساب کاربری دارید؟
          </Link>
        </div>
      </form>
    </div>
  )
}

export default login