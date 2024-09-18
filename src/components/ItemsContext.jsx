import React, { createContext } from 'react'
import { useState, useContext } from 'react'
import { useGlobalContext } from './ShopContext'
const itemContext = createContext(null)
const ItemProvider = ({ children }) => {
    const [wishListItems, setWishListItems] = useState([])
    const { setWish, setWatchLater } = useGlobalContext()
    const [cartItems, setCartItems] = useState([])
    const handleCart = (id, price) => {
        const addToCart = (id, price) => {
            setCartItems((prevItems) => {
                const isItemInCart = prevItems?.some((item) => item.id === id)

                if (isItemInCart) {
                    // Update the cart count and price of the existing item
                    return prevItems.map((item) =>
                        item.id === id
                            ? {
                                  ...item,
                                  cartCount: item.cartCount + 1,
                                  price: item.price + price,
                              }
                            : item
                    )
                } else {
                    // Add new item to the cart with initial count of 1
                    return [...prevItems, { id, cartCount: 1, price }]
                }
            })
        }

        addToCart(id, price)
    }

    const handleWishlist = (id) => {
        setWish((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
        const addToWishList = (id) => {
            setWishListItems((prevItems) => {
                const isItemInWishlist = prevItems.some(
                    (item) => item.id === id
                )
                if (isItemInWishlist) {
                    return prevItems.filter((item) => item.id !== id) // Remove item
                } else {
                    return [...prevItems, { id, wishCount: 1 }] // Add item with initial wishCount
                }
            })
        }
        addToWishList(id)
    }

    const handleWatchLater = (i) => {
        setWatchLater((prev) => ({
            ...prev,
            [i]: !prev[i],
        }))
    }

    return (
        <itemContext.Provider
            value={{
                wishListItems,
                setWishListItems,
                handleWatchLater,
                handleWishlist,
                handleCart,
                cartItems,
                setCartItems,
            }}
        >
            {children}
        </itemContext.Provider>
    )
}
const useItemContext = () => {
    return useContext(itemContext)
}
export { itemContext, ItemProvider, useItemContext }
