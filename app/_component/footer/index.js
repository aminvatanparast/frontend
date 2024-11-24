'use client'

import React from 'react'
import Social from '../social'
import {Logo} from "../logo/logo";

export const Footer = () => {
  return (
    <div className='w-full bg-customPrimary-300'>
      <div className='mx-auto my-container '>
        <div
          className='grid grid-cols-2 gap-4 lg:gap-0 pt-20'>
          <div className=''>
			<Logo
				width={150}
				height={35}
			/>
            <p className='pb-8 pt-3 text-sm  lg:max-w-xs text-center lg:text-left text-white'>We are always open to
              discuss your project and improve your online presence.</p>

            <div className={"grid grid-cols-2 gap-4 p-5 px-8 bg-customPrimary-400 mt-11 border-b border-1-customPrimary-500 w-3/4"}>
              <div className={"flex flex-col gap-1"}>
                <span className={"font-[18px] text-white"}>Email me at</span>
                <span className={"font-[18px]  text-white"}>contact@website.com</span>
              </div>
              <div className={"flex flex-col gap-1"}>
                <span className={"font-[18px]  text-white"}>Call us</span>
                <span className={"font-[18px]  text-white"}>+1 852 001 032 152</span>
              </div>
            </div>

          </div>
          <div className={'flex flex-col gap-7'}>
            <div className="font-bold  xl:text-[48px] xl:leading-[46px] text-white">Lets Talk!</div>
            <p className="text-white text-base text-sm  lg:max-w-xs">
              We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.
            </p>
            <Social dark={false}/>
          </div>
        </div>
      </div>
      <div className='py-7 bg-customPrimary-400'>
        <div className='flex items-center my-container justify-center flex-col lg:justify-between lg:flex-row'>
          <span className='text-sm text-white '><a href='/'></a>Copyright 2021, Lotus.com</span>
          <ul className='flex items-center gap-9 mt-4 lg:mt-0'>
            <li><a href='javascript:;' className='text-sm text-white'>Terms</a></li>
            <li><a href='javascript:;' className='text-sm text-white'>Privacy</a></li>
            <li><a href='javascript:;' className='text-sm text-white'>Cookies</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
