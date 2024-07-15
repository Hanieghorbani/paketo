import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import products from "../datas/products"
import Header from "../Components/Header/Header"
import { Link } from "react-router-dom"
import Footer from "../Components/Footer/Footer"

export default function Product() {
  const { title } = useParams()
  const productInfos = products.find((product) => product.title == title)

  return (
    <div>
      <Header is={true} />
      <div className="bg-primary rounded-[3rem] mt-32 mx-10 text-primaryLight p-5">
        <Link to="/">خانه</Link> / محصول / {title}
      </div>
      <div className=" bg-minorTX rounded-[3rem] grid sm:grid-cols-1 lg:grid-cols-2 m-10 relative overflow-hidden">
      <img src="/imgs/Untitled.png" alt="" className=" absolute -right-[180px] top-0"/>
        <img src={`/imgs/products/${productInfos.img}`} className="z-10"/>
        <div className="flex flex-col mt-10 gap-5">
          <h5 className="text-3xl font-bold text-zinc-800">
            {productInfos.title}
          </h5>
          <div className="">
            <p>
              آب پرتقال طبیعی، شربت زعفران، چندتکه نان، توت فرنگی ،ساندویچ سالاد مرغ
            </p>
          </div>
          <p className="font-[faNum]">هزینه هر پک:<span>{productInfos.price},000</span></p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
