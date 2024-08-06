"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog"
import { LucideShoppingBasket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { FaStar } from "react-icons/fa6";

const ProductModal = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className='bg-blue-500 text-white flex gap-2 justify-center sm:justify-center p-2'>
                        Add to cart <LucideShoppingBasket size={20} />
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <div className="flex overflow-hidden bg-white dark:bg-gray-800">
                        <div className="w-full border rounded-md bg-slate-200">
                            <Image
                                src={product?.attributes?.Image?.data?.attributes?.url}
                                alt={product?.attributes?.Title}
                                className="h-fit w-fit object-cover"
                                width={1000}
                                height={1000}
                            />
                        </div>

                        <div className="w-2/3 p-4 md:p-4">
                            <h1 className="text-xl font-bold text-gray-800 dark:text-white">{product?.attributes?.Title}</h1>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{product?.attributes?.Description}</p>

                            <div className="flex mt-2 item-center gap-2">
                                <div className="flex justify-center items-center gap-2">
                                    <h1 className="text-lg font-semibold">Rating:</h1>
                                    {product?.attributes?.Rating}
                                    <FaStar size={20} className='text-yellow-500' />
                                </div>
                            </div>

                            <div className="flex gap-2 justify-start items-center mt-4">
                                <h1 className={`text-right text-sm font-bold sm:text-xl ${product?.attributes?.discount && "line-through text-gray-500"}`}>
                                    ${product?.attributes?.Price}
                                </h1>
                                <h1 className="text-right text-sm font-bold sm:text-xl">
                                    {product?.attributes?.discount && (
                                        <span className="text-end font-bold text-sm sm:text-xl">${product?.attributes?.discount}</span>
                                    )}
                                </h1>
                            </div>

                            <div className="flex items-center mt-4">
                                <button onClick={handleDecrease} className="bg-gray-300 px-2 py-2 rounded">-</button>
                                <span className="mx-2">{quantity}</span>
                                <button onClick={handleIncrease} className="bg-gray-300 px-2 py-2 rounded">+</button>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <div className="grid grid-cols-2 gap-3 items-center">
                            <h1 className="text-md text-left text-red-500 font-semibold">You are saving ${product?.attributes?.Price - product?.attributes?.discount} !!! </h1>
                            <Button type="submit" className='bg-green-600 hover:bg-green-400'>Add {quantity} to Cart</Button>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ProductModal