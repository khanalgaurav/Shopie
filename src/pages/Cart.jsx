import React, { useState } from 'react'
import CartItemCard from '../components/CartItemCard'
import { useItemContext } from '../components/ItemsContext'
import { useGlobalContext } from '../components/ShopContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { allProducts } = useGlobalContext()
    const { cartItems } = useItemContext()
    const List = allProducts.filter((i) =>
        cartItems?.find((item) => item.id === i.id)
    )
    const total = cartItems.reduce((acc, item) => acc + item.price, 0)

    return (
        <div className="mx-10 md:mx-32">
            <div>
                <p className="text-gray-400">
                    Home /<span className="text-black"> Cart</span>
                </p>
                <div className="md:w-auto overflow-x-scroll">
                    <div className="px-5 py-3 shadow-md shadow-gray-200 flex md:w-auto w-[750px]">
                        <h1 className="w-1/4">Product</h1>
                        <h1 className="w-1/4 text-center">Price</h1>
                        <h1 className="w-1/4 text-center">Quantity</h1>
                        <h1 className="w-1/4 text-right">Subtotal</h1>
                    </div>
                    <div className="md:w-auto w-[750px]">
                        {List.length == 0 ? (
                            <div className="font-bold text-2xl md:text-center py-10">
                                Cart Empty
                            </div>
                        ) : (
                            List.map((item, i) => {
                                return (
                                    <CartItemCard
                                        img={item.thumbnail}
                                        key={i}
                                        name={item.title}
                                        price={item.price}
                                        identity={item.id}
                                    />
                                )
                            })
                        )}
                    </div>
                </div>
                <Link to={'/'}>
                    <button className="border my-5 border-gray-400 rounded-md px-4 py-2 hover:text-white hover:bg-orange hover:border-orange">
                        Return To Shop
                    </button>
                </Link>
                <div className="flex flex-col md:flex-row justify-between my-5">
                    <div className="flex md:my-0 my-5 h-fit gap-3">
                        <form
                            className="border rounded-sm px-3 py-1 border-gray-400 w-fit"
                            action=""
                        >
                            <input
                                className=" focus:outline-none w-36"
                                type="text"
                                placeholder="Coupon Code"
                            />
                        </form>
                        <button className="md:px-4 px-2 py-1 md:py-2 bg-orange rounded-sm text-white">
                            Apply Coupon
                        </button>
                    </div>
                    <div className="p-5 border-2 md:my-0 mb-10 flex flex-col border-black rounded-md md:w-96 w-full">
                        <h1 className="font-bold my-2">Cart Total</h1>
                        <div className="border-b border-gray-400 flex justify-between py-1 my-2">
                            <p>Subtotal:</p>
                            <p>{total.toFixed(2)}</p>
                        </div>
                        <div className="border-b border-gray-400 flex justify-between py-1 my-2">
                            <p>Shipping:</p>
                            <p>Free</p>
                        </div>
                        <div className="flex justify-between py-1 my-2">
                            <p>Total:</p>
                            <p>{total.toFixed(2)}</p>
                        </div>
                        <button className="bg-orange md:mx-20 py-2 rounded-sm text-white">
                            Proceed To Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
