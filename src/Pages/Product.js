import ProductsSwiper from "../Components/ProductsSwiper/ProductsSwiper"
import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header"
import products from "../datas/products"

import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import * as Yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik"

// icons
import { LiaCartPlusSolid } from "react-icons/lia"
import { FaRegUserCircle, FaStar, FaRegStar, FaPhone } from "react-icons/fa"
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6"

export default function Product() {
  const { title } = useParams()
  const [mainCount, setMainCount] = useState(15)

  const productInfos = products.find((product) => product.title == title)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [showCommOrDesc, setShowCommOrDesc] = useState("desc")
  const stars = [false, false, false, false, false]
  const [mainStar, setMainStar] = useState(stars)
  const [isClickStar, setIsClickStar] = useState(false)
  const [score, setScore] = useState(null)

  const initialValues = {
    contentText: "",
  }

  const validationSchema = Yup.object().shape({
    contentText: Yup.string()
      .required("متن پیام الزامی است")
      .min(5, "پیام وارد شده نمی تواند کمتر از 5 حرف باشد"),
  })
  function hoverStar(index, stars) {
    if (!isClickStar) {
      for (let i = 0; i <= index; i++) {
        stars[i] = true
      }
      setMainStar(stars)
    }
  }
  function leaveStar() {
    if (!isClickStar) {
      setMainStar([false, false, false, false, false])
    }
  }
  function clickStart(e, index, stars) {
    setScore(index + 1)
    for (let i = 0; i <= index; i++) {
      stars[i] = true
    }
    setMainStar(stars)
    setIsClickStar(true)
  }
  return (
    <div>
      <Header is={true} />
      <div className="bg-primary rounded-[3rem] mt-32 sm:mx-3 md:mx-10 text-primaryLight sm:px-3 md:px-5 py-3">
        <Link to="/">خانه</Link> / محصول / {title}
      </div>

      <div className=" bg-minorTX rounded-[2rem] grid sm:grid-cols-1 lg:grid-cols-2 sm:m-3 md:m-10 relative overflow-hidden p-5">
        <img
          src="/imgs/Untitled.png"
          alt=""
          className=" absolute -right-[391px] -top-[166px]"
        />
        <img
          src={`/imgs/products/${productInfos.img}`}
          className="z-10 max-h-96 justify-self-center"
          data-aos="zoom-in"
          data-aos-duration={700}
          data-aos-anchor-placement="top-center"
        />
        {/* main infos  */}
        <div
          className="flex flex-col items-start mt-10 gap-5 z-10 md:pl-10"
          data-aos="fade-right"
          data-aos-duration={700}
          data-aos-anchor-placement="top-center"
        >
          <h5 className="font-[faNum] sm:text-2xl md:text-3xl text-zinc-700">
            {productInfos.title}
          </h5>

          <p className="text-zinc-800">
            این بسته شامل: آب پرتقال طبیعی، شربت زعفران، چندتکه نان، توت فرنگی
            ،ساندویچ سالاد مرغ
          </p>
          <div className="flex sm:flex-col md:flex-row justify-between w-full gap-2 text-zinc-800 font-[faNum]">
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-md"></span>
              میوه‌ها مرغوب و شستشو شده هستند.
            </p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-md"></span>
              حداقل تعداد ثبت سفارش 15 عدد می باشد.
            </p>
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="font-[faNum] text-zinc-700">
              هزینه هر پک: <span>{productInfos.price},000 تومان</span>
            </p>
            {/* <div className="flex items-center justify-between sm:gap-4 md:gap-2">
              <input
                type="text"
                className="bg-primaryLight rounded-xl p-3 placeholder:text-secondary"
                placeholder="کد تخفیف"
              />
              <button className="btn bg-secondary text-sm">اعمال کد</button>
            </div> */}
          </div>
          <div className="flex items-center gap-3">
            {/* counter  */}
            <div className="bg-secondary flex justify-between text-xl items-center text-primaryLight gap-1 w-24 p-[11px] rounded-xl">
              <FaCircleMinus
                className="hover:bg-primary rounded-full cursor-pointer"
                onClick={() => {
                  if (mainCount > 15) {
                    setMainCount((prev) => prev - 1)
                  }
                }}
              />
              <p className="text-dark font-[faNum] sm:text-sm md:text-lg">
                {mainCount}
              </p>

              <FaCirclePlus
                className="hover:bg-primary rounded-full cursor-pointer"
                onClick={() => {
                  setMainCount((prev) => prev + 1)
                }}
              />
            </div>
            {/* end counter  */}

            <button className="btn bg-secondary flex items-center gap-2 sm:text-sm md:text-md">
              <LiaCartPlusSolid className="text-2xl " />
              افزودن به سبد خرید
            </button>
            {/* <VscHeartFilled className="bg-secondary w-12 h-12 rounded-full text-primaryLight p-2 cursor-pointer hover:text-red-500" /> */}
          </div>
        </div>
      </div>

      {/* <div className=" bg-minorTX rounded-[3rem] m-10">
sdfsfd
      </div> */}
      {/* descs and comments  */}
      <div className="bg-minorTX sm:m-3 md:m-10 rounded-[2rem] overflow-hidden">
        <div className="bg-primary text-primaryLight py-5 flex items-center justify-center gap-10 text-lg">
          <h5
            className={` border-primaryLight pb-2 hover:border-b-2 cursor-pointer ${
              showCommOrDesc == "desc" && "border-b-2"
            }`}
            onClick={() => setShowCommOrDesc("desc")}
          >
            توضیحات
          </h5>
          <h5
            className={` pb-2 text-primaryLight border-primaryLight hover:border-b-2 cursor-pointer  ${
              showCommOrDesc == "comment" && "border-b-2"
            }`}
            onClick={() => setShowCommOrDesc("comment")}
          >
            نظرات (<span className="font-[faNum]">3</span>)
          </h5>
        </div>
        <div className="sm:p-3 md:p-10 pt-0">
          {showCommOrDesc == "desc" ? (
            <div className="flex sm:flex-col md:flex-row gap-5 py-5">
              <div className=" space-y-3 sm:w-full md:w-1/2">
                <h2 className="text-xl font-bold text-zinc-800 flex gap-2 items-center">
                  <div className="sm:w-2 md:w-4 sm:h-2 md:h-4 bg-secondary sm:rounded-sm md:rounded-md"></div>
                  درباره محصول
                </h2>
                <p className="leading-8 text-justify text-zinc-800 text-sm">
                  {productInfos.title} مناسب برای پذیرایی از مهمانان در مراسمات
                  ترحیم مختلف مانند هفتم، چهلم و … این پک پذیرایی ترحیم دارای
                  اقلام گوناگون و متفاوتی است که می تواند به عنوان یک پذیرایی
                  مناسب و لاکچری کاربرد داشته باشد. برای خرید پک ترحیم و ثبت
                  سفارش می توانید از طریق روش های ارتباطی درج شده در وب سایت، با
                  ما در تماس باشید و سفارش خود را ثبت کنید.
                </p>

                <h2 className="text-xl font-bold text-zinc-800 flex gap-2 items-center">
                  <div className="sm:w-2 md:w-4 sm:h-2 md:h-4 bg-secondary sm:rounded-sm md:rounded-md"></div>
                  مشاوره و راهنمایی
                </h2>
                <p className=" leading-8 text-justify text-zinc-800 text-sm">
                  لطفا جهت راهنمایی ثبت سفارش و اطلاع از سفارشی سازی این محصول
                  با شماره زیر تماس بگیرید:{" "}
                </p>
                <span className="sm:text-xl md:text-2xl font-[faNum] flex items-center gap-2 justify-center text-zinc-800 cursor-pointer hover:text-secondary">
                  <FaPhone />
                  02177300012
                </span>
              </div>
              <table className="mt-5  sm:w-full md:w-1/2">
                <tr className=" rounded-t-xl">
                  <th className=" rounded-tr-xl">تعداد</th>
                  <th>مدت زمان آماده سازی</th>
                  <th>قیمت</th>
                  <th className=" rounded-tl-xl">درصد تخفیف</th>
                </tr>
                <tr>
                  <td>از 15 تا 250</td>
                  <td> 24 ساعت</td>
                  <td>{productInfos.price},000 تومان</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>از 15 تا 250</td>
                  <td> 24 ساعت</td>
                  <td>
                    {productInfos.price -
                      ((productInfos.price * 5) / 100).toPrecision(1)}
                    ,000 تومان
                  </td>
                  <td>5</td>
                </tr>
                <tr>
                  <td className=" rounded-br-xl">از 15 تا 250</td>
                  <td> 48 ساعت</td>
                  <td>
                    {productInfos.price -
                      ((productInfos.price * 7) / 100).toPrecision(1)}
                    ,000 تومان
                  </td>
                  <td className=" rounded-bl-xl">7</td>
                </tr>
              </table>
            </div>
          ) : (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 py-10">
              {/* right section / */}
              <div>
                <h1 className="sm:text-xl md:text-2xl mb-10">نقد و بررسی‌ها</h1>
                {/* comments  */}
                <div className="space-y-6">
                  <div className="bg-primaryLight rounded-2xl p-4">
                    {/* name and score  */}
                    <div className="flex justify-between items-center text-xl mb-5">
                      <div className="flex  gap-1  text-zinc-500">
                        <div>
                          <FaRegUserCircle />
                          <p className="text-xs">کاربر</p>
                        </div>
                        <p className="sm:text-sm md:text-base">حانیه قربانی</p>
                      </div>

                      <div className="flex text-secondary sm:text-sm md:text-base">
                        {Array(4)
                          .fill(1)
                          .map((star) => (
                            <FaStar />
                          ))}

                        {Array(5 - 4)
                          .fill(0)
                          .map((star) => (
                            <FaRegStar />
                          ))}
                      </div>
                    </div>
                    {/* body  */}
                    <div>
                      <p className="text-zinc-700">
                        این پک عالی بود خسته نباشید
                      </p>
                      <div>
                        <p className="text-zinc-500 text-xs text-left">
                          26 تیر 1403
                        </p>
                      </div>

                      {/* answer */}
                      <div className="bg-zinc-100 px-5 mt-3 py-3 rounded-2xl">
                        <div className="flex gap-10 text-xl mb-5">
                          <div className="flex gap-1  text-zinc-500">
                            <div>
                              <FaRegUserCircle />
                              <p className="text-xs">مدیر </p>
                            </div>
                            <p className="text-base">ادمین پکتو</p>
                          </div>
                        </div>
                        {/* body  */}
                        <div>
                          <p className="text-zinc-700">
                            ممنون از شما که ما رو انتخاب کردید
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <span>هیچ دیدگاهی برای این محصول یافت نشد!</span> */}
                </div>
              </div>

              {/* left section  */}
              <div className="sm:border-t-2 md:border-t-0 md:border-r-2 border-secondary sm:pt-10 md:pt-0 md:pr-10 space-y-5">
                <h1 className="text-lg">دیدگاه خود را بنویسید</h1>
                <p className="sm:text-sm md:text-base">
                  نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری
                  شده‌اند *
                </p>

                <div className="flex gap-2 items-center">
                  <p>امتیاز شما:</p>
                  <div className="flex  gap-1">
                    {mainStar.map((star, index) => (
                      <FaStar
                        className={`${
                          star ? "text-secondary" : "text-zinc-500"
                        } cursor-pointer transition-all duration-300`}
                        key={index}
                        data-index={index}
                        onMouseEnter={() => hoverStar(index, stars)}
                        onMouseLeave={leaveStar}
                        onClick={(e) => clickStart(e, index, stars)}
                      />
                    ))}
                  </div>
                </div>

                {/* create comment  */}
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                >
                  <Form className="space-y-10">
                    <div className=" md:col-span-3 relative">
                      <div className="">
                        <label
                          htmlFor={"contentText"}
                          className="text-sm text-zinc-500"
                        >
                          {"دیدگاه شما:"}
                        </label>
                        <Field
                          as="textarea"
                          id={"contentText"}
                          name={"contentText"}
                          className={
                            "bg-primaryLight rounded-xl p-3 placeholder:text-secondary w-full"
                          }
                        />
                        <ErrorMessage
                          name={"contentText"}
                          component="div"
                          className="text-red-600 text-[13px] md:w-1/2"
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn bg-primary text-sm">
                      ثبت دیدگاه
                    </button>
                  </Form>
                </Formik>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* related products */}
      <ProductsSwiper title={"محصولات مرتبط"} bg={"bg-minorTX"} />

      <Footer />
    </div>
  )
}
