import React from "react"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import productInfos from "../../datas/products"
import { Link } from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io"
import { LiaCartPlusSolid } from "react-icons/lia"

export default function Products({title,bg}) {
  return (
    <div className="mt-32  relative">
      {/* <img src="./imgs/Untitled5.png" className=" absolute -left-[389px] -top-[254px]"></img> */}
      <div className="flex justify-between items-center mb-10 px-10">
        <h1 className="text-2xl text-zinc-800 font-bold flex gap-2 items-center">
          <div className="w-4 h-4 bg-secondary rounded-md"></div>
          {title}
        </h1>
        <button className="flex items-center gap-1 text-primary">
          مشاهده تمام محصولات <IoIosArrowRoundBack className="text-2xl" />
        </button>
      </div>
      <div className={`${bg ? bg : 'bg-primary'} p-10`}>
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
          className=" w-full "
          loop={true}
        >
          {productInfos.map((product) => (
            <SwiperSlide>
              <div className="bg-primaryLight rounded-xl overflow-hidden shadow-md shadow-zinc-400/80 mb-10">
                <img
                  src={`/imgs/products/${product.img}`}
                  alt="product"
                  className="w-full h-56 bg-primaryLight cursor-pointer"
                />
                <div className="flex flex-col justify-between p-3 mt-3 space-y-3">
                  <h5 className=" font-[faNum] text-zinc-800  flex justify-between">
                    <p className="text-md cursor-pointer">{product.title}</p>
                    <div className=" text-primary flex items-center gap-2">
                      {product.price},000
                      <p className=" relative">
                        توما
                        <span className=" absolute -top-[14px] left-[3px]">
                          ن
                        </span>
                      </p>
                    </div>
                  </h5>
                  <div className="flex justify-between items-center border-t border-primary pt-3">
                    <Link
                      to={`/product/${product.title}`}
                      className="btn bg-primary text-sm"
                    >
                      اطلاعات بیشتر
                    </Link>
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
        </Swiper>
      </div>
    </div>
  )
}
