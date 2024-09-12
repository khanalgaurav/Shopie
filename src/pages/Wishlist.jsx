import React, { useEffect } from 'react'
import { useGlobalContext } from '../components/ShopContext'
import { useItemContext } from '../components/ItemsContext'
import ItemCard from '../components/ItemCard'
const Wishlist = () => {
    const { allProducts } = useGlobalContext()
    const { wishListItems, handleWatchLater, handleWishlist } = useItemContext()
    const List = allProducts.filter((i) =>
        wishListItems.find((item) => item.id === i.id)
    )
    console.log(List)

    return (
        <div className="mx-32 mb-10 mt-5">
            <h1 className="font-bold text-2xl mb-5">MY WISHLIST</h1>
            <div className="md:flex-row flex flex-col justify-center flex-wrap gap-5">
                {List.map((item, i) => {
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
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Wishlist
