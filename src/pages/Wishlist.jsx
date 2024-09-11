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
        <div>
            <div>
                wishlist
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
