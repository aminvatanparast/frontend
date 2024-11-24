'use client'

import Link from 'next/link'
import Image from 'next/image'

export const Logo = ({ width, height }) => {
    return (
        <Link href={'/'}>
            <Image
                alt='logo'
                width={width}
                height={height}
                src={'/img/logo.png'}
                className='object-cover'
            />
        </Link>
    )
}
