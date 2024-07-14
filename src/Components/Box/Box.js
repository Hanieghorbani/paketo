import React, { useState } from "react"
import { IoDiamondOutline } from "react-icons/io5"
import { GoRocket } from "react-icons/go"
import { PiMagicWandThin } from "react-icons/pi"
import { FaBirthdayCake } from "react-icons/fa"
import { GiCandleFlame } from "react-icons/gi"
import { GiVideoConference } from "react-icons/gi"

export default function Box({ title, icon, duration, desc }) {
  const [isHovered, setIsHovered] = useState(false)
  const icons = {
    GiVideoConference: <GiVideoConference className="" />,
    GiCandleFlame: <GiCandleFlame className="" />,
    FaBirthdayCake: <FaBirthdayCake className="" />,
  }
  return (
    <div
      className="bg-primary flex flex-col p-10  justify-center   items-center rounded-xl text-white gap-3  transition-all  hover:shadow-border-b-white w-1/3 cursor-pointer" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="fade-up"
      data-aos-duration={duration}
      data-aos-anchor-placement="top-center"
      data-aos-delay="100"
    >
      <div
        className={`text-5xl p-5  rounded-full ${
          !isHovered ? "text-light transition-all bg-zinc-700/70" : 'bg-light text-primary'

        }`}
      >
        {icons[icon]}
      </div>

      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <p className="text-center">{desc}</p>
    </div>
  )
}
