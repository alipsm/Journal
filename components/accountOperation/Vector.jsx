import { dotin_nav_logo } from '@/public'
import Image from 'next/image'
import React from 'react'

export default function Vector() {
  return (
    <div className=' blur w-full h-full flex justify-center items-center'>
      {/* <Polygon renderPoint={}/> */}
      <Image
            src={dotin_nav_logo}
            alt="dotin logo"
            className=" relative z-20"
          />
    </div>
  )
}
