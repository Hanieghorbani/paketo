import React from "react"
import { FaRankingStar } from "react-icons/fa6"
import { LuPackageCheck } from "react-icons/lu"
import { SiTicktick } from "react-icons/si"
import { AiOutlineFieldTime } from "react-icons/ai"
export default function AdvertiseBox({ icon, title, desc }) {
  const icons = {
    FaRankingStar: <FaRankingStar className="" />,
    LuPackageCheck: <LuPackageCheck className="" />,
    SiTicktick: <SiTicktick className="" />,
    AiOutlineFieldTime: <AiOutlineFieldTime className="" />,
  }
  return (
    <div
      className=" text-primaryLight flex flex-col items-center gap-4"
      data-aos="zoom-in"
      data-aos-duration={700}
      data-aos-anchor-placement="top-center"
    >
      <span className="text-4xl"> {icons[icon]}</span>
      <h5 className="text-xl font-bold">{title}</h5>
      <p className=" leading-8 text-center">{desc}</p>
    </div>
  )
}
