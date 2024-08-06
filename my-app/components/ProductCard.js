import React from 'react'
import PropTypes from 'prop-types'; 
import { HeartIcon } from 'lucide-react'
import { FaStar } from "react-icons/fa6";
import Image from 'next/image'
import ProductModal from './ProductModal';
const ProductCard = ({ key, product }) => {
  return (
    <div key={key} className="flex flex-col gap-2 border border-gray-300 rounded-md p-5 w-full h-full">
      <div className="shadow-xl bg-slate-100 w-full h-full rounded-md hover:scale-105 transition-all duration-300 relative">
        <Image src={product?.attributes?.Image?.data?.attributes?.url} alt={product?.attributes?.Title} width={1000} height={1000} className='w-full h-full object-contain'/>
        <div className="absolute bottom-2 right-2">
          <HeartIcon size={20}/>
        </div>
      </div>
      <div className="flex justify-center sm:justify-start">
        <FaStar size={20} className='text-yellow-500'/>
        <FaStar size={20} className='text-yellow-500'/>
        <FaStar size={20} className='text-yellow-500'/>
        <FaStar size={20} className='text-yellow-500'/>
        <FaStar size={20} className='text-yellow-500'/>
      </div>
      <div className="grid grid-cols-2 items-center gap-5 sm:gap-0">
        <h1 className="text-left text-sm font-bold sm:text-lg">{product?.attributes?.Title}</h1>
        <div className="flex gap-2 justify-end items-center">
        <h1 className={`text-right text-sm font-bold sm:text-xl  ${product?.attributes?.discount && "line-through text-gray-500"}`}>${product?.attributes?.Price}</h1>
        <h1 className="text-right text-sm font-bold sm:text-xl">
          {product?.attributes?.discount && (
            <h1 className="text-end font-bold text-sm sm:text-xl">${product?.attributes?.discount}</h1>
          )}
        </h1>
        </div>
        
      </div>
      <div className="grid grid-cols-1 items-center justify-center">
        {/* <Button className='bg-blue-500 text-white flex gap-2 justify-center sm:justify-center p-2'>Add to cart <LucideShoppingBasket size={20}/></Button> */}
        <ProductModal product={product}/>
      </div>
    </div>
  )
}

// Define prop types
ProductCard.propTypes = {
  key: PropTypes.string.isRequired, // key as unique
  product: PropTypes.array.isRequired // product as array
};

export default ProductCard