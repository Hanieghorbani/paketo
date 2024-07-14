import CoverEndOfHeader from "./Components/CoverEndOfHeader/CoverEndOfHeader"
import Header from "./Components/Header/Header"
import Box from "./Components/Box/Box"

import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import AOS from "aos"
import { useEffect } from "react"
import { FaInfo } from "react-icons/fa6"
import { IoSearchOutline } from "react-icons/io5"
function App() {
  useEffect(() => {
    AOS.init({})
  }, [])
  return (
    <div className="App">
      <Header />
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper header-cover bg-black"
        loop={true}
      >
        <SwiperSlide>
          <CoverEndOfHeader img="پک-ترحیم-2048x659.jpg" />
        </SwiperSlide>

        <SwiperSlide>
          <CoverEndOfHeader img="پک-پذیرایی-ترحیم.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CoverEndOfHeader img="سربرگ-پک-پذیرایی-ترحیم.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CoverEndOfHeader img="پک-پذیرایی-همایش-2048x758.jpg" />
        </SwiperSlide>
      </Swiper>
      {/* <img
        src="./imgs/cloud-bg.3d269249c45974f564a9.png"
        className="z-[580] -mt-14 relative"
      /> */}

      {/* body */}

      <div className="">
        {/* type */}
        <div className="mt-24 mx-10">
          <h1 className="text-secondary text-center font-bold text-2xl">
            نوع مراسم را انتخاب کن !
          </h1>
          <div className="flex sm:flex-col md:flex-row justify-between gap-5 sm:my-14 lg:my-12 group">
            <Box
              title="مراسم ترحیم"
              icon="GiCandleFlame"
              duration="500"
              desc="با پک پذیرایی ترحیم با خیال راحت از مهمانان و عزاداران پذیرایی کنید."
            />
            <Box
              title="تولد و مهمانی"
              icon="FaBirthdayCake"
              duration="700"
              desc="پک پذیرایی همایش و جشن و هر دورهمی خود را از پکتو سفارش دهید."
            />
            <Box
              title="همایش"
              icon="GiVideoConference"
              duration="1300"
              desc="بهترین پک پذیرایی همایش با کیفیت و قیمت مناسب"
            />
          </div>
        </div>
        {/* end type  */}

        {/* more info  */}
        <div className="flex gap-2 items-center bg-[#E8DFCA] my-36 justify-between px-10">
          <div className="w-[40%] space-y-5 py-10">
            <h1
              className="text-2xl font-bold text-gray-800"
              data-aos="fade-left"
              data-aos-duration={500}
              data-aos-anchor-placement="top-center"
              data-aos-delay="100"
            >
              سفارش پک آماده در <span className="text-secondary">پَکِتو</span>
            </h1>
            <p
              className="border-r-2 border-secondary pr-3 leading-9 text-justify"
              data-aos="fade-left"
              data-aos-duration={700}
              data-aos-anchor-placement="top-center"
              data-aos-delay="100"
            >
              شما می­توانید پس از انتخاب هر یک از انواع مراسم بالا، پک پذیرایی
              مورد نظر خود را انتخاب کنید و در آخر تعداد پک های پذیرایی مورد نظر
              خود را وارد نمایید. و یا اینکه برای سفارش تلفنی پک پذیرایی و اطلاع
              از قیمت پک‌های پذیرایی، با شماره 02100012345 تماس بگیرید. از اینجا
              به بعد تنها منتظر تحویل پک پذیرایی سفارشی خود در آدرس و زمانی که
              تعیین کرده‌اید باشید. به همین راحتی پَکِتو تحویل بگیر!
            </p>
            <div className="flex gap-4">
              <button className="btn bg-primary flex gap-1 items-center">
                انتخاب پک <IoSearchOutline />
              </button>
              <button className="btn bg-primary flex gap-2 items-center">
                اطلاعات بیشتر <FaInfo />
              </button>
            </div>
          </div>
          <div className="relative w-[60%]">
            <img
              src="./imgs/Untitled.png"
              alt=""
              className=" absolute w-[50rem] h-[43rem] -top-[181px] -left-[97px]"
            />
            <div
              className="z-10 flex justify-center relative mr-[121px]"
              data-aos="fade-right"
              data-aos-duration={700}
              data-aos-anchor-placement="top-center"
              data-aos-delay="100"
            >
              <img
                src="./imgs/پک-پذیرایی-مقوایی-مشکی-min.jpg"
                className="w-44 rounded-lg ml-5"
              />
              <div className="grid grid-cols-2 gap-5">
                <img
                  src="./imgs/سینی-حلوا-و-خرمای-مجلسی-scaled.jpg"
                  alt=""
                  className="w-40 rounded-lg"
                />
                <img
                  src="./imgs/پک-ترحیم-میوه-scaled.jpg"
                  alt=""
                  className="w-40 rounded-lg"
                />
                <img
                  src="./imgs/سینی-خرما-حلوا-مجلسی-300x300.jpg"
                  alt=""
                  className="w-40 rounded-lg"
                />
                <img
                  src="./imgs/پک-بسته-بندی-پذیرایی.jpeg"
                  alt=""
                  className="w-40 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        {/* end more info  */}
      </div>

      {/* end of body  */}
    </div>
  )
}

export default App
