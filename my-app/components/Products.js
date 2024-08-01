import React from 'react'
import Image from 'next/image'

const Products = () => {
  return (
    <div>
        <h1 className="text-2xl font-bold">Our Popular Products</h1>
        <div className="flex justify-center items-center gap-5">
            <div className="flex flex-col text-center shadow-md rounded-lg p-4 w-1/3">
            <Image src="/assets/guava.png" alt="guava image" width={500} height={500} className='w-full h-full object-cover'/>
            <h1 className="text-xl font-bold">Guava</h1>
            <p className="text-sm font-light">Price: $10</p>
            </div>
            
        </div>
    </div>
  )
}

export default Products