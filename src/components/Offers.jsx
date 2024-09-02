import React from 'react'
import { Link } from 'react-router-dom'

const Offers = () => {
    return (
        <header className="bg-black text-white w-screen text-center py-2">
            <h1>
                Summer Sale For All Swim Suits And Free Express Delivery - 50%
                OFF! &nbsp;&nbsp;
                <Link to={'/home'} className="underline">
                    ShopNow
                </Link>
            </h1>
        </header>
    )
}

export default Offers
