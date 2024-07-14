import React, { useContext, useEffect, useState } from "react"
import useScroll from "../../hooks/useScroll"
import { Link } from "react-router-dom"

// icons
import { LuUser2 } from "react-icons/lu";
import {
  IoChevronDownOutline,
  IoSettings,
  IoLogOutOutline,
} from "react-icons/io5"
import {
  CiSearch,
  CiUser,
  CiSettings,
  CiCreditCard1,
  CiBookmark,
} from "react-icons/ci"
import { FaBars } from "react-icons/fa6"
import {
  FaHome,
  FaPhoneAlt,
  FaSearch,
  FaUserCircle,
  FaUser,
  FaCreditCard,
} from "react-icons/fa"
import { GiFilmSpool } from "react-icons/gi"
import { MdArticle } from "react-icons/md"
import { FiLogIn } from "react-icons/fi"
import { IoMdClose } from "react-icons/io"

// import axios from "axios"
// icons
export default function Header() {
  const [isFixed, offset] = useScroll(67)

  return (
    <div
      //   className={`flex justify-between items-center container-primary py-2 px-8 lg:z-[600] sm:z-50 w-full text-white transition-all duration-200
      // ${
      //   offset == 0
      //     ? "bg-inherit fixed top-0"
      //     : offset > 0 && isFixed
      //     ? "backdrop-blur-md bg-zinc-900/70 shadow-2xl fixed top-0"
      //     : "hidden"
      // }`}
      className="flex justify-between items-center container-primary py-2 px-8    lg:z-[600] sm:z-50 w-full text-white transition-all duration-200 backdrop-blur-md bg-zinc-700/70 shadow-2xl fixed top-0"
    >
      <div className="flex items-center">
        <img src="./imgs/logo.png" alt="logo" className="w-24 cursor-pointer" />
        <ul className="gap-5 -mb-2 mr-3 sm:hidden lg:flex">
          <li className="nav-link flex items-center gap-1 group relative">
            پک پذیرایی
          </li>
          <li className="nav-link flex items-center gap-1 group relative">
            انوااع پک های پذیرایی ما
          </li>
          <li className="nav-link flex items-center gap-1 group relative">
            مقاله ها
          </li>
          <li className="nav-link flex items-center gap-1 group relative">
            تماس با ما
          </li>
        </ul>
      </div>
      <div>
        <button className="btn bg-primary text-[0.9rem] flex items-center gap-2">
          <LuUser2 className="text-xl"/>
          <span>ورود / عضویت</span>
        </button>
      </div>
    </div>
  )
}
