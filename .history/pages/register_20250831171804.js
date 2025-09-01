import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { rEgister } from "../services/auth";
import styles from "../styles/Register.module.css";

export default function Register() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("data:", data);

    try {
      const { response, error } = await rEgister(
        data.username,
        data.password,
        data.tpassword
      );
      console.log({ response, error });
      if (response?.status === 201) {
        router.push("/login");
      }
    } catch (error) {
      console.log(error?.response?.data || error.message);
    }
  };

  return (
    <div className={styles.title1}>
      <p>بوت کمپ بوتو استارت</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.img_title}>
          <Image src="/union.png" width={80} height={84.47} alt="logo" />
          <p className={styles.title}>فرم ثبت نام</p>
        </div>

        <div className={styles.inputs}>
          
          <input
            {...register("username", {
              required: "یوزرنیم را وارد کنید",
              minLength: { value: 4, message: "حداقل 4 کاراکتر وارد کنید" },
            })}
            className={styles.input1}
            placeholder="نام کاربری"
          />
          {errors.username && <p className={styles.error}>{errors.username.message}</p>}

          
          <input
            {...register("password", {
              required: "پسورد را وارد کنید",
              minLength: { value: 8, message: "حداقل 8 کاراکتر وارد کنید" },
            })}
            className={styles.input2}
            placeholder="رمز عبور"
            type="password"
          />
          {errors.password && <p className={styles.error}>{errors.password.message}</p>}

          
          <input
            {...register("tpassword", {
              required: "تکرار پسورد الزامی است",
              validate: (value) =>
                value === watch("password") || "پسوردها مطابقت ندارند",
            })}
            
          />
          {errors.tpassword && <p className={styles.error}>{errors.tpassword.message}</p>}

          <button className={styles.btn} type="submit">
            ثبت نام
          </button>
          <Link className={styles.account} href="/login">
            حساب کاربری دارید؟
          </Link>
        </div>
      </form>
    </div>
  );
}
