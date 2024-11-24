'use client'

import Link from 'next/link'


export const Navbar = () => {


    return (
        <nav className='  flex items-center justify-start gap-4 2xl:gap-8'>
            <Link
                href='/'
                className=' text-white hover:text-white-900'
            >
              Home
            </Link>


            <Link
                href='/about-us'
                className=' text-white hover:text-white-900'
            >
              About us
            </Link>

            <Link
                href='/features'
                className='text-white hover:text-white-900'
            >
              Features
            </Link>
            <Link
                href='/contact-us'
                className=' text-white hover:text-white-900'
            >
              Pricing
            </Link>
            <Link
                href='/contact-us'
                className=' text-white hover:text-white-900'
            >
              FAQ
            </Link>
            <Link
                href='/contact-us'
                className=' text-white hover:text-white-900'
            >
              Blog
            </Link>
          <button
            className="bg-transparent hover:bg-main text-white  py-2   border-2 border-secondary-100 rounded-full px-10 py-4 ml-4">
            Contact us
          </button>
        </nav>
    )
}
