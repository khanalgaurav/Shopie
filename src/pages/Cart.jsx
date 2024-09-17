import React, { useState } from 'react'
import CartItemCard from '../components/CartItemCard'
import { useItemContext } from '../components/ItemsContext'
import { useGlobalContext } from '../components/ShopContext'

const Cart = () => {
    const [list, setList] = useState()
    const { allProducts } = useGlobalContext()
    const { cartItems } = useItemContext()
    const List = allProducts.filter((i) =>
        cartItems?.find((item) => item.id === i.id)
    )
    return (
        <div className="mx-10 md:mx-32">
            <div>
                <p className="text-gray-400">
                    Home /<span className="text-black"> Cart</span>
                </p>
                <div className="hidden px-5 py-3 shadow-md shadow-gray-200 md:flex">
                    <h1 className="w-1/4">Product</h1>
                    <h1 className="w-1/4 text-center">Price</h1>
                    <h1 className="w-1/4 text-center">Quantity</h1>
                    <h1 className="w-1/4 text-right">Subtotal</h1>
                </div>
                <div>
                    {List.map((item, i) => {
                        return (
                            <CartItemCard
                                img={item.thumbnail}
                                key={i}
                                name={item.title}
                                price={item.price}
                                identity={item.id}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cart
