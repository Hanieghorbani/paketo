import React, { useState } from "react"
import { IoDiamondOutline } from "react-icons/io5"
import { GoRocket } from "react-icons/go"
import { PiMagicWandThin } from "react-icons/pi"
import { FaBirthdayCake } from "react-icons/fa"
import { GiCandleFlame } from "react-icons/gi"
import { GiVideoConference } from "react-icons/gi"
import { MdFreeBreakfast } from "react-icons/md";
export default function Box({ title, icon, duration, desc }) {
  const [isHovered, setIsHovered] = useState(false)
  const icons = {
    GiVideoConference: <GiVideoConference className="" />,
    GiCandleFlame: <GiCandleFlame className="" />,
    FaBirthdayCake: <FaBirthdayCake className="" />,
    MdFreeBreakfast: <MdFreeBreakfast className="" />,
  }
  return (
    <div
      className="bg-primary flex flex-col p-10  justify-center   items-center rounded-xl text-primaryLight gap-3  transition-all  hover:shadow-border-b-white cursor-pointer" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="fade-up"
      data-aos-duration={duration}
      data-aos-anchor-placement="top-center"
      data-aos-delay="100"
    >
      <div
        className={`text-5xl p-5  rounded-full ${
          !isHovered ? "text-primaryLight transition-all bg-zinc-700/70" : 'bg-primaryLight text-primary'

        }`}
      >
        {icons[icon]}
      </div>

      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <p className="text-center">{desc}</p>
    </div>
  )
}
