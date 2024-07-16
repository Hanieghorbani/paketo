import CoverEndOfHeader from "../Components/CoverEndOfHeader/CoverEndOfHeader"
import Header from "../Components/Header/Header"
import Box from "../Components/Box/Box"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import productsInfos from "../datas/products"
import articles from "../datas/articles"
import AdvertiseBox from "../Components/AdvertiseBox/AdvertiseBox"
import Footer from "../Components/Footer/Footer"
import "swiper/css"
import { Link } from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io"
import { FaInfo } from "react-icons/fa6"
import { IoSearchOutline } from "react-icons/io5"
import { LiaCartPlusSolid } from "react-icons/lia"
import Products from "../Components/ProductsSwiper/ProductsSwiper"
function Index() {
  return (
    <div className="App">
      <Header />
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
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
          <CoverEndOfHeader img="20200624193352_5ef36b5891dfa.jpg" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <CoverEndOfHeader img="پک-پذیرایی-همایش-2048x758.jpg" />
        </SwiperSlide> */}
      </Swiper>
      {/* <img
        src="./imgs/cloud-bg.3d269249c45974f564a9.png"
        className="z-[580] -mt-14 relative"
      /> */}

      {/* body */}

      <div className="">
        {/* type */}
        <div className="mt-24 sm:mx-3 md:mx-10">
          <h1 className="text-secondary text-center font-bold sm:text-xl smMd:text-2xl flex gap-2 items-center justify-center">
            <div className="sm:w-2 md:w-4 sm:h-2 md:h-4 bg-secondary sm:rounded-sm md:rounded-md"></div>
            نوع مراسم را انتخاب کن !
          </h1>
          <div className="grid sm:grid-cols-1 smMd:grid-cols-2 lg:grid-cols-4 justify-between gap-5 sm:my-14 lg:my-12 group">
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
            <Box
              title="صبحانه"
              icon="MdFreeBreakfast"
              duration="1300"
              desc="پک صبحانه پکتو را در ابعاد و قیمت‌های گوناگون سفارش دهید."
            />
          </div>
        </div>
        {/* end type  */}

        {/* first info  */}
        <div className="flex sm:flex-col md:flex-row gap-2 items-center bg-minorTX my-36 justify-between sm:px-3 md:px-10">
          <div className="md:w-[40%] space-y-5 py-10">
            <h1
              className="sm:text-xl smMd:text-2xl font-bold text-gray-800 flex items-center gap-2"
              data-aos="fade-left"
              data-aos-duration={500}
              data-aos-anchor-placement="top-center"
            >
              <div className="sm:w-2 md:w-4 sm:h-2 md:h-4 bg-secondary sm:rounded-sm md:rounded-md"></div>
              سفارش پک آماده در <span className="text-secondary">پَکِتو</span>
            </h1>
            <p
              className="md:border-r-2 border-secondary md:pr-3 leading-9 text-justify"
              data-aos="fade-left"
              data-aos-duration={700}
              data-aos-anchor-placement="top-center"
            >
              شما می­توانید پس از انتخاب هر یک از انواع مراسم بالا، پک پذیرایی
              مورد نظر خود را انتخاب کنید و در آخر تعداد پک های پذیرایی مورد نظر
              خود را وارد نمایید. و یا اینکه برای سفارش تلفنی پک پذیرایی و اطلاع
              از قیمت پک‌های پذیرایی، با شماره 02177300012 تماس بگیرید. از اینجا
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
              <button className="btn sm:text-sm md:text-base bg-primary flex gap-1 items-center">
                انتخاب پک <IoSearchOutline />
              </button>
              <button className="btn sm:text-sm md:text-base bg-primary flex gap-2 items-center">
                اطلاعات بیشتر <FaInfo />
              </button>
            </div>
          </div>
          <div className="relative md:w-[60%]">
            <img
              src="./imgs/Untitled.png"
              alt=""
              className=" absolute w-[50rem] sm:h-[21rem] smMd:h-[28rem] md:h-[43rem] sm:-top-[82px] md:-top-[116px] lg:-top-[181px] sm:left-0 md:-left-[97px]"
            />
            <div
              className="z-10 flex md:flex-col lg:flex-row justify-center relative md:mr-[121px]"
              data-aos="fade-right"
              data-aos-duration={700}
              data-aos-anchor-placement="top-center"
            >
              <img
                src="./imgs/پک-پذیرایی-مقوایی-مشکی-min.jpg"
                className="sm:w-24 smMd:w-32 md:w-80 lg:w-44 md:h-44 lg:h-auto rounded-lg ml-2 md:ml-5 md:mb-5 lg:mb-0"
              />
              <div className="grid grid-cols-2 sm:gap-2 md:gap-5">
                <img
                  src="./imgs/سینی-حلوا-و-خرمای-مجلسی-scaled.jpg"
                  alt=""
                  className="sm:w-20 smMd:w-28 md:w-40 rounded-lg"
                />
                <img
                  src="./imgs/پک-ترحیم-میوه-scaled.jpg"
                  alt=""
                  className="sm:w-20 smMd:w-28 md:w-40 rounded-lg"
                />
                <img
                  src="./imgs/سینی-خرما-حلوا-مجلسی-300x300.jpg"
                  alt=""
                  className="sm:w-20 smMd:w-28 md:w-40 rounded-lg"
                />
                <img
                  src="./imgs/پک-بسته-بندی-پذیرایی.jpeg"
                  alt=""
                  className="sm:w-20 smMd:w-28 md:w-40 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        {/* end first info  */}

        {/* Counseling */}
        <div className="my-32 sm:px-3 md:px-10 flex sm:flex-col smMd:flex-row items-center justify-between gap-5">
          <h1
            className="sm:text-xl md:text-2xl font-bold text-gray-800"
            data-aos="flip-right"
            data-aos-duration={700}
            data-aos-anchor-placement="top-center"
          >
            برای راهنمایی سفارش پک، مشاوره رایگان دریافت کنید.
          </h1>
          <div
            className="flex flex-col gap-3 sm:w-full md:w-[45%]"
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
            <button className="btn sm:text-sm md:text-base bg-primary">رزرو مشاوره</button>
          </div>
        </div>
        {/*end Counseling */}

        {/*product paks  */}
        <Products title={'پک های پذیرایی ما'}/>
        {/*end product paks  */}

        {/* Advertise */}
        <div className=" relative mb-32 sm:px-3 md:px-10  py-20 bg-img-halva bg-cover bg-no-repeat">
          <div className=" absolute top-0 left-0 w-full h-full bg-zinc-800/80"></div>
          <div className="flex sm:flex-col lg:flex-row justify-between gap-10 fap-5 z-10 relative">
            <AdvertiseBox
              icon="FaRankingStar"
              title="کیفیت عالی"
              desc="در پک پذیرایی پکتو از با کیفیت‌ترین محصولات و برندهای بازار استفاده می‌شود. همه میوه‌ها تازه، درجه یک و دستچین هستند."
            />
            <AdvertiseBox
              icon="LuPackageCheck"
              title="بسته‌بندی بهداشتی"
              desc="بسته های پذیرایی از جنس مقوای بهداشتی و دوستدار محیط‌ زیست هستند. این جعبه‌ها پس از استفاده قابلیت بازیافت دارند."
            />
            <AdvertiseBox
              icon="SiTicktick"
              title="برگزاری آبرومندانه"
              desc="ظاهر زیبا و جذاب پک ها و کیفیت عالی محصولات داخل بسته پذیرایی پکتو جلوه خاص و منحصربه‌فردی به پذیرایی مراسم شما می‌بخشد."
            />
            <AdvertiseBox
              icon="AiOutlineFieldTime"
              title="صرفه‌جویی در زمان"
              desc="تهیه بسته های پذیرایی مراسم‌های خودتان را به عهده پکتو بگذارید و زمان ارزشمندتان را صرف سایر امور مهم‌ مراسم نمایید."
            />
          </div>
        </div>
        {/*end Advertise */}

        {/* articles */}
        <div className="my-32 sm:px-3 md:px-10 relative">
          <img
            src="./imgs/Untitled2.png"
            className="sm:hidden md:flex absolute -right-[400px] -top-[206px]"
          ></img>
          <div className="my-32 sm:px-3 md:px-10">
            <div className="flex justify-between items-center mb-10 z-10">
              <h1 className="text-2xl sm:text-zinc-800 md:text-light relative font-bold flex gap-2 items-center">
                <div className="sm:w-2 md:w-4 sm:h-2 md:h-4 bg-secondary sm:rounded-sm md:rounded-md"></div>
                آخرین مطالب
              </h1>
              <button className="flex items-center gap-1 text-primary">
                مشاهده تمام مطالب <IoIosArrowRoundBack className="text-2xl" />
              </button>
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
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper w-full header-cover"
              loop={true}
            >
              {articles.map((article) => (
                <SwiperSlide>
                  <div className=" bg-minorTX  rounded-xl overflow-hidden">
                    <img
                      src={article.img}
                      alt="article"
                      className="w-full h-56 rounded-b-lg cursor-pointer"
                    />
                    <div className="flex flex-col justify-between p-3 mt-3 space-y-3">
                      <h5 className="text-lg font-[faNum] text-zinc-800 cursor-pointer">
                        {article.title}
                      </h5>
                      <p className=" leading-7 text-sm">{article.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/*end articles */}

        <Footer />
      </div>
      {/* <div className="w-full h-96">sdf</div> */}
      {/* end of body  */}
    </div>
  )
}

export default Index
