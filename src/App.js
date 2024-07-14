import CoverEndOfHeader from "./Components/CoverEndOfHeader/CoverEndOfHeader";
import Header from "./Components/Header/Header";
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"

function App() {
  return (
    <div className="App overflow-x-hidden">
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
            <CoverEndOfHeader
              img="پک-ترحیم-2048x659.jpg"
             
            />
          </SwiperSlide>

         
          <SwiperSlide>
            <CoverEndOfHeader
              img="پک-پذیرایی-ترحیم.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CoverEndOfHeader
              img="سربرگ-پک-پذیرایی-ترحیم.jpg"
      
            />
          </SwiperSlide>
          <SwiperSlide>
            <CoverEndOfHeader
              img="پک-پذیرایی-همایش-2048x758.jpg"
       
            />
          </SwiperSlide>
        </Swiper>

    </div>
  );
}

export default App;
