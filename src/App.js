import CoverEndOfHeader from "./Components/CoverEndOfHeader/CoverEndOfHeader"
import Header from "./Components/Header/Header"
import Box from "./Components/Box/Box"

import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import AOS from "aos"
import { useEffect } from "react"

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
      <img
        src="./imgs/cloud-bg.3d269249c45974f564a9.png"
        className="z-[580] -mt-14 relative"
      />

      {/* body */}

      <div className="mx-10">
        {/* type */}
        <div className="mt-24">
          <h1 className="text-light text-center font-bold text-xl">
            نوع مراسم را انتخاب کن !
          </h1>
          <div className="flex sm:flex-col md:flex-row justify-between gap-5 sm:my-14 lg:my-12 group">
            <Box title="مراسم ترحیم" icon="GiCandleFlame" duration="500" desc='با پک پذیرایی ترحیم با خیال راحت از مهمانان و عزاداران پذیرایی کنید.'/>
            <Box title="تولد و مهمانی" icon="FaBirthdayCake" duration="700" desc='پک پذیرایی همایش و جشن و هر دورهمی خود را از پکتو سفارش دهید.'/>
            <Box title="همایش" icon="GiVideoConference" duration="1300" desc='بهترین پک پذیرایی همایش با کیفیت و قیمت مناسب'/>
          </div>
        </div>
      </div>

      {/* end of body  */}
    </div>
  )
}

export default App
