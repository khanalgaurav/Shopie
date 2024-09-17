import React, { createContext } from 'react'
import { useState, useContext } from 'react'
import { useGlobalContext } from './ShopContext'
const itemContext = createContext(null)

// const getDefaultCartItem = (len) => {
//     let cart = {}
//     for (let i = 1; i <= len; i++) {
//         cart[i] = 0
//     }
//     return cart
// }

const ItemProvider = ({ children }) => {
    const [wishListItems, setWishListItems] = useState([])
    const { setWish, setWatchLater } = useGlobalContext()
    const [cartItems, setCartItems] = useState([])
    const handleCart = (id) => {
        const addToCart = (id) => {
            setCartItems((prevItems) => {
                const isItemInCart = prevItems?.some((item) => item.id === id)

                if (isItemInCart) {
                    // Update the cart count of the existing item
                    return prevItems.map((item) =>
                        item.id === id
                            ? { ...item, cartCount: item.cartCount + 1 }
                            : item
                    )
                } else {
                    // Add new item to the cart with initial count of 1
                    return [...prevItems, { id, cartCount: 1 }]
                }
            })
        }

        addToCart(id)
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
