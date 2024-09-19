import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { useItemContext } from '../ItemsContext'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa6'
import ItemCard from '../ItemCard'
const ProductDisplay = ({
    image,
    imageTitle,
    rating,
    reviews,
    stock,
    price,
    desc,
    identity,
    relatedProducts,
    title,
}) => {
    const stars = Array.from({ length: rating }, (_, i) => (
        <FaStar key={i} className="text-yellow-400 text-lg" />
    ))
    const { cartItems, setCartItems, handleCart } = useItemContext()

    const handleIncrease = () => {
        setCartItems((prevItems) => {
            return prevItems.map((item) => {
                if (item.id === identity) {
                    return {
                        ...item,
                        cartCount: item.cartCount + 1,
                        price: item.price + price, // Adjust the unit price correctly
                    }
                } else {
                    return item
                }
            })
        })
    }

    const handleDecrease = () => {
        setCartItems((prevItems) =>
            prevItems.reduce((acc, item) => {
                if (item.id === identity) {
                    if (item.cartCount > 1) {
                        return [
                            ...acc,
                            {
                                ...item,
                                cartCount: item.cartCount - 1,
                                price: item.price - price,
                            },
                        ]
                    } else {
                        // Remove item if cartCount is 1
                        return acc
                    }
                } else {
                    return [...acc, item]
                }
            }, [])
        )
    }

    return (
        <div>
            <div className="md:flex mb-10 gap-10">
                <div className="flex gap-5 md:w-3/5">
                    <div className="hidden flex-col gap-4 md:flex">
                        <div className="w-36 h-36 overflow-hidden shadow-md shadow-gray-300">
                            <img
                                className="h-36 w-36"
                                src={image}
                                alt={imageTitle}
                            />
                        </div>
                        <div className="w-36 h-36 overflow-hidden shadow-md shadow-gray-300">
                            <img
                                className="h-36 w-36"
                                src={image}
                                alt={imageTitle}
                            />
                        </div>
                        <div className="w-36 h-36 overflow-hidden shadow-md shadow-gray-300">
                            <img
                                className="h-36 w-36"
                                src={image}
                                alt={imageTitle}
                            />
                        </div>
                        <div className="w-36 h-36 overflow-hidden shadow-md shadow-gray-300">
                            <img
                                className="h-36 w-36"
                                src={image}
                                alt={imageTitle}
                            />
                        </div>
                    </div>
                    <div className=" shadow-md shadow-gray-300 md:h-[625px] w-full flex justify-center overflow-hidden ">
                        <img src={image} alt={imageTitle} />
                    </div>
                </div>

                <div className="md:w-2/5 md:my-0 my-10">
                    <h1 className="font-bold text-xl">{title}</h1>
                    <div className="flex items-center">
                        {stars}
                        <p className="text-gray-500">
                            ({reviews} Reviews) |{' '}
                            {stock > 0 ? (
                                <span className="text-green-500">In Stock</span>
                            ) : (
                                <span className="text-red-500">
                                    Out of Stock
                                </span>
                            )}
                        </p>
                    </div>
                    <div className="border-b-2 border-gray-300 pb-5">
                        <h2 className="text-2xl my-3">${price}</h2>
                        <p>{desc}</p>
                    </div>
                    <div className="flex gap-5 my-6">
                        <p>Size :</p>
                        <div className="border rounded-md h-7 w-7 flex justify-center items-center">
                            S
                        </div>
                        <div className="border rounded-md h-7 w-7 flex justify-center items-center">
                            M
                        </div>
                        <div className="border rounded-md h-7 w-7 flex justify-center items-center">
                            L
                        </div>
                    </div>

                    <div className="flex gap-4 items-center border border-gray-400 pl-3 py-0.5 rounded-md w-fit">
                        <p>
                            {cartItems.find((i) => i.id === identity)
                                ?.cartCount || 0}
                        </p>
                        <div className="px-1 ">
                            <FaAngleUp
                                onClick={handleIncrease}
                                className="border rounded-sm w-7 hover:cursor-pointer"
                            />
                            <FaAngleDown
                                onClick={handleDecrease}
                                className="border rounded-sm w-7 hover:cursor-pointer"
                            />
                        </div>
                    </div>

                    <button
                        className="bg-orange px-3 py-1 rounded-md my-5 text-white"
                        onClick={() => handleCart(identity, price)}
                    >
                        Add to Cart
                    </button>

                    <div>
                        <div className="border rounded-md p-5 my-2">
                            <h1 className="font-bold">Free Delivery</h1>
                            <p>
                                Enter your postal code for Delivery Availability
                            </p>
                        </div>
                        <div className="border rounded-md p-5 my-2">
                            <h1 className="font-bold">Return Delivery</h1>
                            <p>Free 30 Days Delivery Returns. Details</p>
                        </div>
                    </div>
                </div>
            </div>
            <header className="flex justify-between md:justify-normal relative md:gap-40 items-center">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-3 items-center">
                        <div className="h-8 w-4 rounded-md bg-orange"></div>
                        <h5 className="text-orange font-bold ">Explore</h5>
                    </div>
                    <h1 className="md:text-3xl text-2xl font-bold">
                        Related Items
                    </h1>
                </div>
            </header>
            <section
                id="slider"
                className="flex md:flex-wrap md:justify-center md:flex-row flex-col items-center gap-7 my-8 overflow-x-scroll scroll scroll-smooth scrollbar-hide"
            >
                {relatedProducts.map((item, i) => {
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
                                handleCart={() =>
                                    handleCart(item.id, item.price)
                                }
                            />
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default ProductDisplay
