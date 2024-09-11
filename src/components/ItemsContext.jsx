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

            // const item = wishListItems.find((i) => i.id === id)
            // if (item) {
            //     if (item.wishCount === 0) {
            //         item.wishCount += 1
            //     } else if (item.wishCount === 1) {
            //         item.wishCount -= 1
            //     }
            //     setWishListItems((prev) => [
            //         ...prev.filter((i) => i.id !== id),
            //         item,
            //     ])
            // } else {
            //     wishListItems.push({
            //         id: id,
            //         wishCount: 1,
            //     })
            // }
        }
        addToWishList(id)
    }
    console.log(wishListItems)

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
