import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import { useGlobalContext } from './ShopContext'
import { useItemContext } from './ItemsContext'

const FlashSales = () => {
    const {
        allProducts,
        isLoading,
        error,
        wish,
        setWish,
        watchLater,
        setWatchLater,
    } = useGlobalContext()
    const { handleWishlist, handleWatchLater, handleCart } = useItemContext()

    const bestSellingProducts = allProducts.slice(12, 21)

    return (
        <div className="border-b border-gray-300 mt-20 mb-10">
            <header className="flex justify-between md:justify-normal relative md:gap-40 items-center">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-3 items-center">
                        <div className="h-8 w-4 rounded-md bg-orange"></div>
                        <h5 className="text-orange font-bold ">This Month</h5>
                    </div>
                    <h1 className="md:text-3xl text-2xl font-bold">
                        Best Selling Products
                    </h1>
                </div>

                <div className="md:flex gap-20 absolute top-5 right-20 hidden ">
                    <button className="bg-orange px-4 py-2 mb-10 mt-2 text-white rounded-sm">
                        View All Products
                    </button>
                </div>
            </header>

            <section
                id="slider"
                className="flex md:flex-wrap md:justify-center md:flex-row flex-col items-center gap-7 my-8 overflow-x-scroll scroll scroll-smooth scrollbar-hide"
            >
                {bestSellingProducts.map((item, i) => {
                    const mPrice = (
                        item.price +
                        item.price * (Math.ceil(item.discountPercentage) / 100)
                    ).toFixed(2)
                    return (
                        <div key={i}>
                            <ItemCard
                                key={i}
                                name={item.title}
                                reviews={item.reviews.length}
                                price={item.price}
                                marketPrice={mPrice}
                                thumbnail={item.thumbnail}
                                discount={Math.ceil(item.discountPercentage)}
                                handleWishlist={() => handleWishlist(item.id)}
                                handleWatchLater={() =>
                                    handleWatchLater(item.id)
                                }
                                id={item.id}
                                rating={Math.floor(item.rating)}
                                handleCart={() => handleCart(item.id)}
                            />
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default FlashSales
