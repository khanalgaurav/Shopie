import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa6'
import { FaStarHalf } from 'react-icons/fa6'
import { GoHeart, GoHeartFill } from 'react-icons/go'
import { BsEye, BsEyeFill } from 'react-icons/bs'
import { useGlobalContext } from './ShopContext'
import { useItemContext } from './ItemsContext'

const ItemCard = ({
    name,
    reviews,
    price,
    thumbnail,
    discount,
    marketPrice,
    handleWatchLater,
    handleWishlist,
    id,
    rating,
    handleCart,
}) => {
    const { allProducts, isLoading, error, wish, watchLater } =
        useGlobalContext()
    // Generate an array of stars based on the rating
    const stars = Array.from({ length: rating }, (_, i) => (
        <FaStar key={i} className="text-yellow-400 text-lg" />
    ))
    return (
        <article className="group w-52 ">
            <section className="border rounded-md w-fit relative overflow-hidden">
                <img className="h-52 w-52" src={thumbnail} alt={name} />
                <div className="absolute top-2 left-2 bg-orange rounded-md text-[12px] text-white px-2">
                    -{discount}%
                </div>
                <div
                    onClick={handleWishlist}
                    className={`absolute top-2 right-2 bg-orange px-1 py-1 text-white text-xl rounded-full`}
                >
                    {wish[id] ? <GoHeartFill /> : <GoHeart />}
                </div>
                <div
                    onClick={handleWatchLater}
                    className={`absolute top-10 right-2 bg-orange px-1 py-1 text-white text-xl rounded-full `}
                >
                    {watchLater[id] ? <BsEyeFill /> : <BsEye />}
                </div>
                <div>
                    <button
                        onClick={handleCart}
                        className="transition-all ease-in-out duration-500 text-center w-full border border-black absolute group-hover:-translate-y-0 translate-y-10 bottom-0 bg-black text-white py-1 rounded-b-md"
                    >
                        Add To Cart
                    </button>
                </div>
            </section>
            <section className="flex flex-col gap-1 my-1">
                <h2 className="text-lg font-bold">
                    {name.slice(0, 19) + `...`}
                </h2>
                <p className="flex gap-5">
                    <span className="text-orange text-lg font-bold">
                        ${price}
                    </span>
                    <span className="line-through text-gray-500 text-lg font-bold">
                        ${marketPrice}
                    </span>
                </p>
                <div className="flex items-center">
                    {stars}
                    <p className="text-gray-500">({reviews})</p>
                </div>
            </section>
        </article>
    )
}

export default ItemCard
