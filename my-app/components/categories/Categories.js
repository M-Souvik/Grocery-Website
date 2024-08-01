import React from 'react'
import Image from 'next/image'


const Categories = () => {
  return (
    <div className='sm:px-5 py-2'>
  
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-7">
            <div className="p-2 bg-red-200 w-full rounded-md hover:scale-110 transition-all duration-300 ">
            <Image src="/assets/fruit.png" alt="guava" width={1000} height={1000} className='w-full h-full object-contain'/>
            </div>

            <div className=" bg-blue-200 w-full rounded-md hover:scale-110 transition-all duration-300">
            <Image src="/assets/oil-pouch.png" alt="oil-pouch" width={1000} height={1000} className='w-full h-full object-contain'/>
            </div>

            <div className="p-2 bg-purple-200 w-full rounded-md hover:scale-110 transition-all duration-300">
            
            <Image src="/assets/vegetable-card.png" alt="potato" width={10000} height={10000} className='w-full h-full object-contain'/>
            </div>

            <div className=" bg-orange-200 w-full rounded-md hover:scale-110 transition-all duration-300">
            <Image src="/assets/atta.png" alt="atta" width={1000} height={1000} className='w-full h-full object-contain'/>
            </div>

            <div className=" p-2 bg-violet-200 w-fit rounded-md hover:scale-110 transition-all duration-300">
            <Image src="/assets/dairy-product.png" alt="onion" width={1000} height={1000} className='w-full h-full object-contain'/>
            </div>
            
            <div className="p-2 bg-fuchsia-200 w-fit rounded-md hover:scale-110 transition-all duration-300">
            <Image src="/assets/rice.png" alt="rice" width={1000} height={1000} className='w-full h-full object-contain'/>
            </div>
        </div>
    </div>
  )
}

export default Categories