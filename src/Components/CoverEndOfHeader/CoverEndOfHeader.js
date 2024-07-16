import React from "react"
export default function CoverEndOfHeader({ img }) {
  return (
    <div className={`relative sm:h-[40vh] smMd:h-[60vh] md:h-[90vh]`}>
      <div className="bg-gradient-dark absolute top-0 left-0 w-full h-full z-10"></div>
      <img src={`./imgs/${img}`} className="-z-10 h-full w-full" />
    </div>
  )
}
