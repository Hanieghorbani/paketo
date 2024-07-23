import React, { useState } from "react"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { Link } from "react-router-dom"
import Input from "../Components/Fields/Input/Input"
export default function Login() {
  const [isVisiblePass, setIsVisiblePass] = useState(false)

  const validationSchema = Yup.object().shape({
    identifier: Yup.string()
      .required("نام کاربری یا آدرس ایمیل الزامی است !")
      .min(3, "نام باید حداقل ۳ حرف داشته باشد !"),
    password: Yup.string()
      .required("رمز عبور الزامی است !")
      .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد !"),
  })
  const initialValues = {
    identifier: "",
    password: "",
  }

  return (
    <div>
      <Header is={true} />
      <div
        className={`flex flex-col justify-center items-center py-20 overflow-hidden relative mt-10`}
      >
        {/* <div className="w-[140%] h-[44rem] bg-gradient-login absolute sm:right-44 md:-right-44 md:top-60 -rotate-12 sm:top-0"></div>{" "} */}
        {/* <img
          src="./images/dribbble/83b4e1042703e531952e2f6dee007f7e-removebg-preview.png"
          alt=""
          className="absolute sm:left-[1px] md:left-[2px] md:top-[-24px] w-[103%] sm:top-[56px] md:rotate-[9deg]"
        />
      */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form className=" bg-minorTX backdrop-blur-lg text-zinc-800 space-y-7 md:w-2/3 lg:w-[40%] sm:p-5 sm:pt-0 lg:p-10 lg:pt-0 rounded-2xl z-10 shadow-lg">
            <h1 className="sm:text-lg md:text-2xl text-center bg-primary lg:py-3 rounded-b-2xl w-1/3 mx-auto text-primaryLight">
              ورود
            </h1>
            <div className="text-center">
              <p className="">
                حساب کاربر ندارید؟{" "}
                <Link to={"/register"} className="text-primary">
                  ثبت نام
                </Link>
              </p>
            </div>

            <Input
              label={"نام کاربر یا آدرس ایمیل*"}
              id={"identifier"}
              icon="FaUser"
            />
            <Input
              label={"گذرواژه*"}
              id={"password"}
              type={isVisiblePass ? "text" : "password"}
              isVisible={isVisiblePass}
              setIsVisible={setIsVisiblePass}
              pass={true}
            />

            <div className="flex sm:flex-col lg:flex-row lg:items-center justify-between gap-2">
              <div className="text-primary flex items-center gap-1">
                <input type="checkBox" />
                <p>مرا به خاطر بسپار</p>
              </div>
              <p className=" text-primary text-sm cursor-pointer">
                رمز عبور خود را فراموش کرده اید؟
              </p>
            </div>

            {/* login btn  */}
            <div className="flex items-center justify-center">
              <button type="submit" className="btn bg-primary text-sm w-1/2">
                ورود
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      <Footer />
    </div>
  )
}
