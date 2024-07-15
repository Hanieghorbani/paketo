import CoverEndOfHeader from "./Components/CoverEndOfHeader/CoverEndOfHeader"
import Header from "./Components/Header/Header"
import Box from "./Components/Box/Box"
import ProductBox from "./Components/ProductBox/ProductBox"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import products from "./products/products"
// Import Swiper styles
import "swiper/css"
import AOS from "aos"
import { useEffect } from "react"
import { FaInfo } from "react-icons/fa6"
import { IoSearchOutline } from "react-icons/io5"
import { LiaCartPlusSolid } from "react-icons/lia"
import { IoIosArrowRoundBack } from "react-icons/io";
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
        className="mySwiper w-full header-cover bg-black"
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

        {/* first info  */}
        <div className="flex gap-2 items-center bg-minorTX my-36 justify-between px-10">
          <div className="w-[40%] space-y-5 py-10">
            <h1
              className="text-2xl font-bold text-gray-800"
              data-aos="fade-left"
              data-aos-duration={500}
              data-aos-anchor-placement="top-center"
            >
              سفارش پک آماده در <span className="text-secondary">پَکِتو</span>
            </h1>
            <p
              className="border-r-2 border-secondary pr-3 leading-9 text-justify"
              data-aos="fade-left"
              data-aos-duration={700}
              data-aos-anchor-placement="top-center"
            >
              شما می­توانید پس از انتخاب هر یک از انواع مراسم بالا، پک پذیرایی
              مورد نظر خود را انتخاب کنید و در آخر تعداد پک های پذیرایی مورد نظر
              خود را وارد نمایید. و یا اینکه برای سفارش تلفنی پک پذیرایی و اطلاع
              از قیمت پک‌های پذیرایی، با شماره 02100012345 تماس بگیرید. از اینجا
              به بعد تنها منتظر تحویل پک پذیرایی سفارشی خود در آدرس و زمانی که
              تعیین کرده‌اید باشید. به همین راحتی پَکِتو تحویل بگیر!
            </p>
            <div
              className="flex gap-4"
              // data-aos="fade-left"
              // data-aos-duration={1300}
              // data-aos-anchor-placement="top-center"
              // data-aos-delay="0"
            >
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
        {/* end first info  */}

        {/* Counseling */}
        <div className="my-32 px-10 flex items-center justify-between">
          <h1
            className="text-2xl font-bold text-gray-800"
            data-aos="flip-right"
            data-aos-duration={700}
            data-aos-anchor-placement="top-center"
          >
            برای راهنمایی سفارش پک، مشاوره رایگان دریافت کنید !
          </h1>
          <div
            className="flex flex-col gap-3 w-[45%]"
            data-aos="flip-left"
            data-aos-duration={700}
            data-aos-anchor-placement="top-center"
          >
            <input
              type="text"
              className="bg-minorTX rounded-xl p-3 placeholder:text-secondary"
              placeholder="نام شما"
            />
            <input
              type="text"
              className="bg-minorTX rounded-xl p-3 placeholder:text-secondary"
              placeholder="تلفن شما"
            />
            <button className="btn bg-primary">رزرو مشاوره</button>
          </div>
        </div>
        {/*end Counseling */}

        {/*product paks  */}
        <div className="my-32 px-10">
          <div  className="flex justify-between items-center mb-10">
            <h1 className="text-2xl text-zinc-800 font-bold">
              پک های پذیرایی ما
            </h1>
            <button className="flex items-center gap-1 text-primary">مشاهده تمام محصولات <IoIosArrowRoundBack className="text-2xl"/></button>
          </div>
          <Swiper
            breakpoints={{
              300: { slidesPerView: 1 },
              400: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              976: { slidesPerView: 4 },
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            modules={[Pagination, Autoplay]}
            className="mySwiper w-full header-cover"
            loop={true}
          >
            {products.map((product) => (
              <SwiperSlide>
                <div className="bg-minorTX rounded-xl overflow-hidden">
                  <img
                    src={`./imgs/products/${product.img}`}
                    alt="product"
                    className="w-full h-56 bg-[#729762] rounded-b-lg"
                  />
                  <div className="flex flex-col justify-between p-3 mt-3 space-y-3">
                    <h5 className="text-lg font-[faNum] text-zinc-800">{product.title}</h5>
                    <div className="flex justify-between items-center">
                      <span className="font-[faNum] text-primary">
                        {product.price},000 تومان
                      </span>
                      <button
                        className=" cursor-pointer text-secondary text-bold text-2xl"
                        title="افزودن به سبد خرید"
                      >
                        <LiaCartPlusSolid />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* <SwiperSlide>
              <ProductBox
                img={"170947726465e48d903cb4d.png"}
                title={"پک پذیرایی جشن 2"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox
                img={"170947783365e48fc918c2f.png"}
                title={"پک پذیرایی جشن 3"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox
                img={"167923000964170439d413a.png"}
                title={"پک پذیرایی همایش 4"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox
                img={"1666615256635687d84dd8e.png"}
                title={"پک پذیرایی ترحیم 5"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox
                img={"166661597663568aa82613a.png"}
                title={"پک پذیرایی همایش 6"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox
                img={"1683720520645b89486c7c2.png"}
                title={"پک پذیرایی ترحیم 7"}
              />
            </SwiperSlide> */}
          </Swiper>
        </div>
        {/*end product paks  */}
      </div>
      <div className="w-full h-96">sdf</div>
      {/* end of body  */}
    </div>
  )
}

export default App
