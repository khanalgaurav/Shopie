import React from 'react'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa6'
import { useItemContext } from './ItemsContext'

const CartItemCard = ({ img, name, price, identity }) => {
    const { cartItems, setCartItems } = useItemContext()

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
        <div className="shadow-md shadow-gray-200 my-5">
            <div className="flex items-center justify-between px-5 py-1">
                <div className="flex items-center w-1/4">
                    <img className="h-16 w-16" src={img} alt={name} />
                    <p>{name}</p>
                </div>
                <p className=" w-1/4 text-center">${price}</p>
                <div className=" w-1/4 flex justify-center">
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
                </div>
                <p className=" w-1/4 text-right">
                    {(
                        price *
                            cartItems.find((i) => i.id === identity)
                                ?.cartCount || 0
                    ).toFixed(2)}
                </p>
            </div>
        </div>
    )
}

export default CartItemCard
