import React, { useState } from "react"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { useNavigate, Link } from "react-router-dom"
import Input from "../Components/Fields/Input/Input"
export default function Register() {
  const [isVisiblePass, setIsVisiblePass] = useState(false)
  const [isVisiblePassConfirm, setIsVisiblePassConfirm] = useState(false)

  const initialValues = {
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("نام و نام خانوادگی الزامی است !"),
    phone: Yup.string()
      .required("شماره موبایل الزامی است !")
      .matches(
        /09(1[0-9]|3[1-9]|2[1-9]|9[0-9])-?[0-9]{3}-?[0-9]{4}/,
        "شماره مویابل را به درستی وارد کنید !"
      )
      .max(11, "شماره مویابل را به درستی وارد کنید !"),
    username: Yup.string()
      .required("نام کاربری الزامی است !")
      .matches(
        /^[a-zA-Z0-9-]+$/,
        "در نام کاربری فقط استفاده از حروف انگلیسی، اعداد و ـ (زیر خط) مجاز است !"
      ),
    email: Yup.string()
      .email("ایمیل را به درستی وارد کنید !")
      .required("ایمیل الزامی است !"),
    password: Yup.string()
      .required("گذرواژه الزامی است !")
      .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد !"),
    confirmPassword: Yup.string()
      .required("تکرار رمز عبور الزامی است !")
      .oneOf([Yup.ref("password"), null], "تکرار رمز عبور مطابقت ندارد !"),
  })
  return (
    <div>
      <Header is={true}/>
      <div
        className={`flex flex-col justify-center items-center container-primary pb-20 pt-32 relative overflow-hidden`}
      >
        {/* <div className="sm:w-[240%] md:w-[120%] h-[40rem] bg-gradient-login absolute -right-44 -bottom-40 rotate-12"></div> */}
        {/* <img
          src="./images/dribbble/83b4e1042703e531952e2f6dee007f7e-removebg-preview.png"
          alt=""
          className="absolute sm:left-[2px] md:left-[2px] md:top-[121px] md:w-[133%] sm:top-[31px] rotate-[0deg] md:h-[90%]"
        />
        <img
          src="./images/dribbble/83b4e1042703e531952e2f6dee007f7e-removebg-preview.png"
          alt=""
          className="absolute sm:left-[2px] md:left-[2px] md:top-[121px] md:w-[133%] sm:top-[343px] rotate-[0deg] md:h-[90%] sm:block md:hidden"
        />
        <img
          src="./images/dribbble/83b4e1042703e531952e2f6dee007f7e-removebg-preview.png"
          alt=""
          className="absolute sm:left-[2px] md:left-[2px] md:top-[121px] md:w-[133%] sm:bottom-[-66px] rotate-[0deg] md:h-[90%] sm:block md:hidden"
        /> */}

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form className=" bg-minorTX backdrop-blur-lg text-zinc-700 space-y-7 md:w-2/3 lg:w-[40%] sm:p-5 sm:pt-0 lg:p-10 lg:pt-0 rounded-2xl z-10 shadow-lg">
            <h1 className="sm:text-lg md:text-2xl text-center bg-primary lg:py-3 rounded-b-2xl w-1/3 mx-auto text-primaryLight">
              عضویت
            </h1>
            <div className="text-center">
              <p className="">
                قبلا ثبت نام کرده اید؟{" "}
                <Link to={"/login"} className="text-primary">
                  وارد شوید
                </Link>
              </p>
            </div>

            <Input
              label={"نام و نام خانوادگی*"}
              id={"name"}
              icon={"MdDriveFileRenameOutline"}
            />
            <Input label={"نام کاربری*"} id={"username"} icon="FaUser" />
            <Input label={"شماره موبایل*"} id={"phone"} icon={"FaPhoneAlt"} />
            <Input
              label={"آدرس ایمیل*"}
              id={"email"}
              type={"email"}
              icon={"FaEnvelope"}
            />

            {/* password  */}

            <div className="grid grid-cols-2 gap-7">
              <Input
                label={"رمزعبور*"}
                id={"password"}
                type={isVisiblePass ? "text" : "password"}
                isVisible={isVisiblePass}
                setIsVisible={setIsVisiblePass}
                pass={true}
              />
              <Input
                label={"تکرار رمز عبور*"}
                id={"confirmPassword"}
                type={isVisiblePassConfirm ? "text" : "password"}
                isVisible={isVisiblePassConfirm}
                setIsVisible={setIsVisiblePassConfirm}
                pass={true}
              />
            </div>

            {/* login btn  */}
            <div className="flex items-center justify-center">
              <button type="submit" className="btn bg-primary text-sm w-1/2">
                ثبت نام
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      <Footer />
    </div>
  )
}
