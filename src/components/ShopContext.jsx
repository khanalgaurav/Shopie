import React, { useContext, useEffect, useState } from 'react'
import bannerList from '../assets/BannerList'

const AppContext = React.createContext()

const AppContextProvider = ({ children }) => {
    const [allProducts, setAllProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()
    const baseUrl = 'https://dummyjson.com'

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

    return (
        <AppContext.Provider
            value={{
                bannerList,
                allProducts,
                isLoading,
                error,
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
