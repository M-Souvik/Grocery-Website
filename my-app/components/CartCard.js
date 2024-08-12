import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { IndianRupee, Trash2 } from 'lucide-react';
const CartCard = ({key, item}) => {
  return (
    
        <div className="grid grid-cols-2 items-center bg-green-200 rounded-lg" key={key}>
            <Image src={item?.attributes?.products?.data[0]?.attributes?.Image?.data?.attributes?.url} alt='' width={1000} height={1000} className='bg-contain w-full h-full bg-green-300 rounded-full p-4'/>
            <div className="flex flex-col p-4">
                <h1 className="text-sm text-black flex gap-2 font-semibold">{item?.attributes?.products?.data[0]?.attributes?.title}<div className="text-lg text-slate-500 justify-end">Qty:{item?.attributes?.quantity}</div></h1>
                <div className="text-2xl font-semibold flex items-center">
                <IndianRupee size={20}/>{item?.attributes?.amount}
                </div>
                {/* <div className="text-2xl font-semibold flex items-center"> <IndianRupee size={20}/>30</div> */}
                <Button className="bg-red-600 mt-3 flex gap-1 border-none  hover:bg-red-500">Remove Item<Trash2 size={40}/></Button>
            </div>
         </div>
  )
}

export default CartCard