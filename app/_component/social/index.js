import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



const Social = ({dark}) => {
  return (
    <div className='flex mt-4 space-x-4 justify-center lg:justify-start sm:mt-0 '>
      <Link href={'/'}>
        <Image
          alt='logo'
          width={30}
          height={30}
          src={dark ? '/icon/socialMedia/facebook-dark.svg' :'/icon/socialMedia/facebook.svg'}
          className='object-cover'
        />
      </Link>
      <Link href={'/'}>
        <Image
          alt='logo'
          width={30}
          height={30}
          src={dark ? '/icon/socialMedia/twitter-dark.svg' :'/icon/socialMedia/twitter.svg'}
          className='object-cover'
        />
      </Link>
      <Link href={'/'}>
        <Image
          alt='logo'
          width={30}
          height={30}
          src={dark ? '/icon/socialMedia/instagram-dark.svg' :'/icon/socialMedia/instagram.svg'}
          className='object-cover'
        />
      </Link>
      <Link href={'/'}>
        <Image
          alt='logo'
          width={30}
          height={30}
          src={dark ? '/icon/socialMedia/link-dark.svg':'/icon/socialMedia/link.svg'}
          className='object-cover'
        />
      </Link>

    </div>
  )
}

export default Social
