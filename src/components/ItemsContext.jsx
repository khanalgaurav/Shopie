import React, { createContext } from 'react'
import { useState, useContext } from 'react'
import { useGlobalContext } from './ShopContext'
const itemContext = createContext(null)

const ItemProvider = ({ children }) => {
    const [wishListItems, setWishListItems] = useState([])
    const { setWish, setWatchLater } = useGlobalContext()

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
