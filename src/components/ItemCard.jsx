import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { FaStarHalf } from 'react-icons/fa6'
import { CiHeart } from 'react-icons/ci'
import { IoEyeOutline } from 'react-icons/io5'
import { useGlobalContext } from './ShopContext'

const ItemCard = ({ name, reviews, price, thumbnail, discount }) => {
    const { allProducts, isLoading, error } = useGlobalContext()
    return (
        <div className="group w-52 ">
            <div className="border rounded-md w-fit relative overflow-hidden">
                <img className="h-52 w-52" src={thumbnail} alt={name} />
                <div className="absolute top-2 left-2 bg-orange rounded-md text-[12px] text-white px-2">
                    -{discount}%
                </div>
                <div className="absolute top-2 right-2 bg-orange px-1 py-1 text-white font-bold text-xl rounded-full">
                    <CiHeart />
                </div>
                <div className="absolute top-10 right-2 bg-orange px-1 py-1 text-white font-bold text-xl rounded-full">
                    <IoEyeOutline />
                </div>
                <div>
                    <button className="transition-all ease-in-out duration-500 text-center w-full border border-black absolute group-hover:-translate-y-0 translate-y-10 bottom-0 bg-black text-white py-1 rounded-b-md">
                        Add To Cart
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-1 my-1">
                <p className="text-lg font-bold">{name.slice(0, 19) + `...`}</p>
                <p className="flex gap-5">
                    <span className="text-orange text-lg font-bold">
                        ${price}
                    </span>
                    <span className="line-through text-gray-500 text-lg font-bold">
                        $160
                    </span>
                </p>
                <div className="flex items-center">
                    <FaStar className="text-yellow-400 text-lg" />
                    <FaStar className="text-yellow-400 text-lg" />
                    <FaStar className="text-yellow-400 text-lg" />
                    <FaStar className="text-yellow-400 text-lg" />

                    <p className="text-gray-500">({reviews})</p>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
