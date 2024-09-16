import React from 'react'
import { useGlobalContext } from '../components/ShopContext'
import ItemCard from '../components/ItemCard'
import { useItemContext } from '../components/ItemsContext'
const ProductCategory = (props) => {
    const { allProducts } = useGlobalContext()
    const { handleWatchLater, handleWishlist } = useItemContext()
    return (
        <div className="md:mx-32 mx-10">
            <header className="flex justify-between md:justify-normal relative md:gap-40 items-center mt-10">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-3 items-center">
                        <div className="h-8 w-4 rounded-md bg-orange"></div>
                        <h5 className="text-orange font-bold ">
                            Browse Category
                        </h5>
                    </div>
                    <h1 className="md:text-3xl text-2xl font-bold">
                        {props.category.toUpperCase()}
                    </h1>
                </div>
            </header>
            <div className="flex flex-wrap justify-center my-10 gap-7">
                {allProducts.map((item, i) => {
                    if (item.category === props.category) {
                        const mPrice = (
                            item.price +
                            item.price *
                                (Math.ceil(item.discountPercentage) / 100)
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
                                    discount={Math.ceil(
                                        item.discountPercentage
                                    )}
                                    handleWishlist={() =>
                                        handleWishlist(item.id)
                                    }
                                    handleWatchLater={() =>
                                        handleWatchLater(item.id)
                                    }
                                    id={item.id}
                                    rating={Math.floor(item.rating)}
                                />
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default ProductCategory
