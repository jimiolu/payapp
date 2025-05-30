import Image from 'next/image'
import React from 'react'

const Partners = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center gap-5 lg:gap-20 w-full'>
        <div className='text-nowrap text-gray-500'>Trusted by top companies</div>
        <div className='flex items-center justify-center lg:justify-between w-full flex-wrap gap-x-5 gap-y-4'>
            <Image src="/img2.svg" alt='Indisis' width={100} height={100} priority className='w-24' />
            <Image src="/img.png" alt='Perplexity' width={100} height={100} priority className='w-28' />
            <Image src="/img3.svg" alt='BrainTrust' width={100} height={100} priority className='w-28' />
            <Image src="/img4.png" alt='Finary' width={100} height={100} priority className='w-28' />
            <Image src="/img5.svg" alt='Headspace' width={100} height={100} priority className='w-28' />
        </div>
    </div>
  )
}

export default Partners