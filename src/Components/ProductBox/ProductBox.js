import React from 'react'

export default function ProductBox({img,title}) {
  return (
    <div className='bg-minorTX p-5 rounded-xl flex flex-col items-center'>
        <img src={`./imgs/products/${img}`} alt="product" className='w-[90%] h-56'/>
        <h5 className='text-lg'>{title}</h5>
    </div>
  )
}
