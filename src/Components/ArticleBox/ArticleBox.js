import React from "react"

export default function ArticleBox({img,title,desc}) {
  return (
    <div className=" bg-minorTX  rounded-xl overflow-hidden">
      <img
        src={img}
        alt="article"
        className="w-full h-56 rounded-b-lg cursor-pointer"
      />
      <div className="flex flex-col justify-between p-3 mt-3 space-y-3">
        <h5 className="text-lg font-[faNum] text-zinc-800 cursor-pointer">
          {title}
        </h5>
        <p className=" leading-7 text-sm">{desc}</p>
      </div>
    </div>
  )
}
