import React from "react"
import { animateScroll } from "react-scroll"
import { IoIosArrowUp } from "react-icons/io"
export default function ScrollToTop() {
  return (
    <button
      className="rounded-xl fixed sm:bottom-10 lg:bottom-16  sm:left-10 lg:left-16 bg-secondary sm:w-10 sm:h-10 lg:w-10 lg:h-10 border-none outline-none text-white z-50 flex justify-center items-center"
      onClick={() => {
        animateScroll.scrollToTop()
      }}
    >
      <IoIosArrowUp className="sm:text-2xl lg:text-3xl"/>
    </button>
  )
}
