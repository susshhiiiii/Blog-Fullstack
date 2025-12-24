import React from 'react'
import Image from 'next/image'
import facebook from '../../public/1.png'
import insta from '../../public/2.png'
import twitter from '../../public/3.png'
import youtube from '../../public/4.png'

const Footer = () => {
  return (
    <div className='flex p-4 flex-row justify-between'>
      <div className='flex basis-1/2'>
      ©2023 <span className='text-green-600'>Lamamia.</span> All Rights reserved.</div>
      <div className='flex justify-end items-center basis-1/2'>
        <Image className='ms-2 h-4 w-4' src={facebook} alt={''}></Image>
        <Image className='ms-2 h-4 w-4' src={insta} alt={''}></Image>
        <Image className='ms-2 h-4 w-4' src={twitter} alt={''}></Image>
        <Image className='ms-2 h-4 w-4' src={youtube} alt={''}></Image>
      </div>
    </div>
  )
}

export default Footer