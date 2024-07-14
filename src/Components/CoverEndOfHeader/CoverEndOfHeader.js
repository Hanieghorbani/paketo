import React from "react"
// import { IoPlay } from "react-icons/io5"
// import { IoIosCalendar } from "react-icons/io";
// import { Link } from "react-router-dom";
export default function CoverEndOfHeader({
  img,
  imdb,
  nameText,
  nameImg,
  desc,
  btnInfo,
  time,
  logoSize,
  shortName

}) {
  return (
    <div className={`relative sm:h-[60vh] md:h-[90vh]`}>
      <div className="bg-gradient-dark absolute top-0 left-0 w-full h-full z-10"></div>
      <img src={`./imgs/${img}`} className="sm:hidden lg:block -z-10 h-full w-full" />
      <img src={`./imgs/${img}`}  className="lg:hidden -z-10 h-full w-full" />
      {/* <div
        className="z-[12] flex flex-col absolute sm:bottom-8 md:bottom-12 md:left-96 w-full sm:right-1/2 sm:translate-x-1/2 container-primary text-white md:items-start sm:items-center"
      >
        {nameText && (
          <h1 className=" font-bold text-3xl">{nameText}</h1>
        )}
        {nameImg && <img src={nameImg} alt="imdb" className={`mb-4 ${logoSize && logoSize}`} />}
        {time && <p className="sm:hidden font-[faNum] md:flex gap-1 items-center bg-dark px-3 py-2 text-xs rounded-2xl my-3"><IoIosCalendar />{time} </p>}
        {desc && <p className="sm:text-center sm:text-base md:text-start md:text-xl mb-3">{desc}</p>}
        {btnInfo && (
          <Link to={`/movie/${shortName}`} className="btn-primary sm:text-xs md:text-sm flex gap-1 items-center">
           <IoPlay /> اطلاعات بیشتر 
          </Link>
        )}
      </div> */}
    </div>
  )
}
