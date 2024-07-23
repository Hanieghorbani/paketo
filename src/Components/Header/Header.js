import useScroll from "../../hooks/useScroll"
import Sidebar from "../Sidebar/Sidebar"

import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Dialog } from "@headlessui/react"

// icons
import { LuUser2 } from "react-icons/lu"
import { HiOutlineBars3BottomLeft } from "react-icons/hi2"
import { FiShoppingCart } from "react-icons/fi"
import { IoIosArrowDown } from "react-icons/io"
// icons

export default function Header({ is }) {
  const [isFixed, offset] = useScroll(67)
  const [isOpenSideMenu, setIsOpenSideMenu] = useState(false)
  const [isShowSubMenu, setIsShowSubMenu] = useState(false)
  return (
    <>
      <div
        className={`flex justify-between items-center container-primary py-2  sm:px-3 md:px-10 lg:z-[600] sm:z-50 w-full  transition-all duration-200
      ${
        offset == 0 && !is
          ? " bg-inherit fixed top-0 text-primaryLight"
          : offset > 0 && isFixed
          ? "backdrop-blur-md bg-zinc-900/70 shadow-2xl fixed top-0 text-primaryLight"
          : is
          ? "backdrop-blur-md bg-zinc-900/70 shadow-2xl fixed top-0 text-primaryLight"
          : "hidden"
      }`}
        // className="flex justify-between items-center container-primary py-2 px-8    lg:z-[600] sm:z-50 w-full text-white transition-all duration-200 backdrop-blur-md bg-zinc-700/70 shadow-2xl fixed top-0"
      >
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/imgs/logo.png"
              alt="logo"
              className="sm:w-16 md:w-24 cursor-pointer"
            />
          </Link>
          <ul className="gap-5 -mb-2 mr-3 sm:hidden md:flex">
            <Link
              to={"/"}
              className="nav-link flex items-center gap-1 group relative"
            >
              صفحه اصلی
            </Link>
            <li
              className="nav-link flex items-center gap-1 group relative"
              onMouseEnter={() => setIsShowSubMenu(true)}
              onMouseLeave={() => setIsShowSubMenu(false)}
            >
              <span className="flex items-center gap-1">
                انواع پک های پذیرایی ما
                <IoIosArrowDown className=" text-primaryLight text-lg"/>
              </span>
              {isShowSubMenu && (
                <ul className="text-sm absolute top-[2.8rem] bg-zinc-900/80 backdrop-blur-md shadow-lg rounded-2xl w-52 p-2">
                  <li className="w-full block subMenu-link">پک ترحیم</li>
                  <li className="w-full block subMenu-link">
                    پک تولد و مهمانی
                  </li>
                  <li className="w-full block subMenu-link">پک همایش</li>
                  <li className="w-full block subMenu-link">پک صبحانه</li>
                </ul>
              )}
            </li>
            <li className="nav-link flex items-center gap-1 group relative">
              مقاله ها
            </li>
            <li className="nav-link flex items-center gap-1 group relative">
              تماس با ما
            </li>
          </ul>
        </div>

        <div className="flex gap-3 items-center">
          <button className="btn bg-primary relative sm:hidden smMd:flex">
            <FiShoppingCart className="text-xl" />
            <span className=" absolute -top-[4px] left-[3px] text-sm font-[faNum]">
              3
            </span>
          </button>
          <button className="btn bg-primary text-[0.9rem] sm:hidden  smMd:flex items-center gap-2">
            <LuUser2 className="text-xl" />
            <span>ورود / عضویت</span>
          </button>
          <button
            className="btn bg-primary sm:flex md:hidden text-xl text-primaryLight"
            onClick={() => setIsOpenSideMenu(true)}
          >
            <HiOutlineBars3BottomLeft />
          </button>
        </div>
      </div>
      <Sidebar isOpen={isOpenSideMenu} setIsOpen={setIsOpenSideMenu}>
        <div className="flex h-full flex-col py-6 shadow-xl backdrop-blur-sm bg-zinc-800/90 text-primaryLight">
          {/* top section  */}
          <div className="px-4 sm:px-6 py-5 bg-zinc-800/70">
            <Dialog.Title className="text-2xl flex justify-between items-center">
              منو
              <button className="btn bg-primary relative sm:flex smMd:hidden text-4xl">
                <FiShoppingCart className="text-xl" />
                <span className=" absolute -top-[4px] left-[3px] text-sm font-[faNum]">
                  3
                </span>
              </button>
            </Dialog.Title>
          </div>

          <div className="relative mt-6 flex-1 px-4 sm:px-6">
            {/* content section  */}
            <ul className="flex flex-col space-y-5 text-white text-xl">
              <li className="li-sidebar">صفحه اصلی</li>
              <li className="li-sidebar">درباره ما</li>
              <li className="li-sidebar">شعبه ها</li>
              <li className="li-sidebar">مقاله ها</li>
              <li className="li-sidebar">تماس با ما</li>
              <li className="li-sidebar">جستجو</li>
              <li className="li-sidebar">ورود/ثبت نام</li>
            </ul>
          </div>
        </div>
      </Sidebar>
    </>
  )
}
