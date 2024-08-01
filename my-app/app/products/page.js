import React from 'react'
import Image from 'next/image'
import { HeartIcon, LucideShoppingBasket, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
const Products = () => {
  return (
    <>
    <div className="container py-2">
    <Carousel>
  <CarouselContent className="p-3">
    
    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
    <div className="flex flex-col gap-2">
        <div className="shadow-xl bg-slate-100 w-full sm:w-4/6 rounded-md hover:scale-105 transition-all duration-300 hover:border-2 hover:border-blue-500 relative">
            <Image src="/assets/guava.png" alt="guava" width={1000} height={1000} className='w-full h-full object-cover'/>
            <div className="absolute bottom-2 right-2">
                <HeartIcon size={20}/>
            </div>
        </div>
        <div className="flex justify-center sm:justify-start">
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
        </div>
        <div className="grid grid-cols-2 items-center gap-5 sm:gap-0">
            <h1 className="text-left text-sm font-bold sm:text-lg">Guava</h1>
            <h1 className="text-left text-sm font-bold sm:text-xl">$20</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
            <Button className='bg-blue-500 text-white flex gap-2 justify-center sm:justify-center p-2'>Add to cart <LucideShoppingBasket size={20}/></Button>
        </div>
    </div>
    </CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/4"> <div className="flex flex-col gap-2">
        <div className="shadow-xl bg-slate-100 w-full sm:w-4/6 rounded-md hover:scale-105 transition-all duration-300 hover:border-2 hover:border-blue-500 relative">
            <Image src="/assets/guava.png" alt="guava" width={1000} height={1000} className='w-full h-full object-cover'/>
            <div className="absolute bottom-2 right-2">
                <HeartIcon size={20}/>
            </div>
        </div>
        <div className="flex justify-center sm:justify-start">
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
        </div>
        <div className="grid grid-cols-2 items-center gap-5 sm:gap-0">
            <h1 className="text-left text-sm font-bold sm:text-lg">Guava</h1>
            <h1 className="text-left text-sm font-bold sm:text-xl">$20</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
            <Button className='bg-blue-500 text-white flex gap-2 justify-center sm:justify-center p-2'>Add to cart <LucideShoppingBasket size={20}/></Button>
        </div>
    </div>
    </CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
    <div className="flex flex-col gap-2">
        <div className="shadow-xl bg-slate-100 w-full sm:w-4/6 rounded-md hover:scale-105 transition-all duration-300 hover:border-2 hover:border-blue-500 relative">
            <Image src="/assets/guava.png" alt="guava" width={1000} height={1000} className='w-full h-full object-cover'/>
            <div className="absolute bottom-2 right-2">
                <HeartIcon size={20}/>
            </div>
        </div>
        <div className="flex justify-center sm:justify-start">
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
        </div>
        <div className="grid grid-cols-2 items-center gap-5 sm:gap-0">
            <h1 className="text-left text-sm font-bold sm:text-lg">Guava</h1>
            <h1 className="text-left text-sm font-bold sm:text-xl">$20</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
            <Button className='bg-blue-500 text-white flex gap-2 justify-center sm:justify-center p-2'>Add to cart <LucideShoppingBasket size={20}/></Button>
        </div>
    </div>
    </CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
    <div className="flex flex-col gap-2">
        <div className="shadow-xl bg-slate-100 w-full sm:w-4/6 rounded-md hover:scale-105 transition-all duration-300 hover:border-2 hover:border-blue-500 relative">
            <Image src="/assets/guava.png" alt="guava" width={1000} height={1000} className='w-full h-full object-cover'/>
            <div className="absolute bottom-2 right-2">
                <HeartIcon size={20}/>
            </div>
        </div>
        <div className="flex justify-center sm:justify-start">
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
        </div>
        <div className="grid grid-cols-2 items-center gap-5 sm:gap-0">
            <h1 className="text-left text-sm font-bold sm:text-lg">Guava</h1>
            <h1 className="text-left text-sm font-bold sm:text-xl">$20</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
            <Button className='bg-blue-500 text-white flex gap-2 justify-center sm:justify-start p-2'>Add to cart <LucideShoppingBasket size={20}/></Button>
        </div>
    </div>
    </CarouselItem>
   
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
    {/* <div className="grid sm:grid-cols-4 grid-cols-2 gap-3">
    <div className="flex flex-col gap-2">
        <div className="shadow-xl bg-slate-100 w-full sm:w-4/6 rounded-md hover:scale-105 transition-all duration-300 hover:border-2 hover:border-blue-500 relative">
            <Image src="/assets/guava.png" alt="guava" width={1000} height={1000} className='w-full h-full object-cover'/>
            <div className="absolute bottom-2 right-2">
                <HeartIcon size={20}/>
            </div>
        </div>
        <div className="flex justify-center sm:justify-start">
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
        </div>
        <div className="grid grid-cols-2 items-center gap-5 sm:gap-0">
            <h1 className="text-left text-sm font-bold sm:text-lg">Guava</h1>
            <h1 className="text-left text-sm font-bold sm:text-xl">$20</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
            <Button className='bg-blue-500 text-white flex gap-2 justify-center sm:justify-start p-2'>Add to cart <LucideShoppingBasket size={20}/></Button>
        </div>
    </div>
    <div className="flex flex-col gap-2">
        <div className="shadow-xl bg-slate-100 w-full sm:w-4/6 rounded-md hover:scale-105 transition-all duration-300 hover:border-2 hover:border-blue-500 relative">
            <Image src="/assets/guava.png" alt="guava" width={1000} height={1000} className='w-full h-full object-cover'/>
            <div className="absolute bottom-2 right-2">
                <HeartIcon size={20}/>
            </div>
        </div>
        <div className="flex justify-center sm:justify-start">
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
        </div>
        <div className="grid grid-cols-2 items-center gap-5 sm:gap-0">
            <h1 className="text-left text-sm font-bold sm:text-lg">Guava</h1>
            <h1 className="text-left text-sm font-bold sm:text-xl">$20</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
            <Button className='bg-blue-500 text-white flex gap-2 justify-center sm:justify-start p-2'>Add to cart <LucideShoppingBasket size={20}/></Button>
        </div>
    </div>
    <div className="flex flex-col gap-2">
        <div className="shadow-xl bg-slate-100 w-full sm:w-4/6 rounded-md hover:scale-105 transition-all duration-300 hover:border-2 hover:border-blue-500 relative">
            <Image src="/assets/guava.png" alt="guava" width={1000} height={1000} className='w-full h-full object-cover'/>
            <div className="absolute bottom-2 right-2">
                <HeartIcon size={20}/>
            </div>
        </div>
        <div className="flex justify-center sm:justify-start">
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
        </div>
        <div className="grid grid-cols-2 items-center gap-5 sm:gap-0">
            <h1 className="text-left text-sm font-bold sm:text-lg">Guava</h1>
            <h1 className="text-left text-sm font-bold sm:text-xl">$20</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
            <Button className='bg-blue-500 text-white flex gap-2 justify-center sm:justify-start p-2'>Add to cart <LucideShoppingBasket size={20}/></Button>
        </div>
    </div>
    <div className="flex flex-col gap-2">
        <div className="shadow-xl bg-slate-100 w-full sm:w-4/6 rounded-md hover:scale-105 transition-all duration-300 hover:border-2 hover:border-blue-500 relative">
            <Image src="/assets/guava.png" alt="guava" width={1000} height={1000} className='w-full h-full object-cover'/>
            <div className="absolute bottom-2 right-2">
                <HeartIcon size={20}/>
            </div>
        </div>
        <div className="flex justify-center sm:justify-start">
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
            <Star size={20} className='text-yellow-500'/>
        </div>
        <div className="grid grid-cols-2 items-center gap-5 sm:gap-0">
            <h1 className="text-left text-sm font-bold sm:text-lg">Guava</h1>
            <h1 className="text-left text-sm font-bold sm:text-xl">$20</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
            <Button className='bg-blue-500 text-white flex gap-2 justify-center sm:justify-start p-2'>Add to cart <LucideShoppingBasket size={20}/></Button>
        </div>
    </div>
     
    </div> */}
    </div>
    </>
  )
}

export default Products