import React, { useContext, useEffect, useState } from 'react'
import bannerList from '../assets/BannerList'

const AppContext = React.createContext()

const AppContextProvider = ({ children }) => {
    const baseUrl = 'https://dummyjson.com'
    const [allProducts, setAllProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()
    const [wish, setWish] = useState({})
    const [watchLater, setWatchLater] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const [userEmail, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true)
            try {
                const res = await fetch(`${baseUrl}/products`)
                const data = await res.json()
                setAllProducts(data.products)
            } catch (e) {
                setError(e)
            } finally {
                setIsLoading(false)
            }
        }
        fetchProducts()
    }, [])

    useEffect(() => {
        const fetchCategories = async () => {
            setIsLoading(true)
            try {
                const res = await fetch(`${baseUrl}/products/category-list`)
                const data = await res.json()

                setCategories(data)
            } catch (e) {
                setError(e)
            } finally {
                setIsLoading(false)
            }
        }
        fetchCategories()
    }, [])

    return (
        <AppContext.Provider
            value={{
                bannerList,
                allProducts,
                isLoading,
                error,
                wish,
                setWish,
                watchLater,
                setWatchLater,
                categories,
                isLoggedIn,
                setIsLoggedIn,
                userEmail,
                setUserEmail,
                password,
                setPassword,
                userName,
                setUserName,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppContextProvider, useGlobalContext }
