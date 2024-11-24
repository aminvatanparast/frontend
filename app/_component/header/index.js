'use client'

import { Navbar } from './navbar'
import {Logo} from "../logo/logo";


export const Header = () => {

    return (
        <div
            className={`w-full  bg-customPrimary-300 py-5`}
        >
            <div className='w-full h-full my-container px-4'>
                <div className='w-full h-full flex items-center justify-between gap-8'>
                    <div className='hidden xl:flex items-center justify-between h-full flex-[2] gap-8'>
                        <Logo
                            width={50}
                            height={35}
                        />
                        <Navbar />
                    </div>
                </div>

            </div>
        </div>
    )
}
