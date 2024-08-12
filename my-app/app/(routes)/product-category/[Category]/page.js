import React from 'react'
import GlobalApi from "@/utils/GlobalApi";
import Products from '@/app/products/page';
const CategorizedProduct = async ({params}) => {
    const response = await GlobalApi.getFilteredCategory(params.Category);
    const getFilteredProducts=response.data.data;
    console.log(getFilteredProducts);
  return (
    <div className='container'>
        <h1 className="text-2xl font-semibold text-center uppercase bg-blue-800 text-white rounded-full">{params.Category}</h1>
        <Products getProduct={getFilteredProducts} />
    </div>
  )
}

export default CategorizedProduct