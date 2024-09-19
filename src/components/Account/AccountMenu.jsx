import React from 'react'

const AccountMenu = () => {
    return (
        <div className=" md:w-80 w-full text-lg">
            <div>
                <h1 className="font-bold mb-2">Manage My Account</h1>
                <ul className="ml-5">
                    <li className="text-gray-500">My Profile</li>
                    <li className="text-gray-500">Address Book</li>
                    <li className="text-gray-500">My payment Options</li>
                </ul>
            </div>
            <div>
                <h1 className="font-bold my-2">My Orders</h1>
                <ul className="ml-5">
                    <li className="text-gray-500">My Returns</li>
                    <li className="text-gray-500">My Cancellations</li>
                </ul>
            </div>
            <div>
                <h1 className="font-bold my-2">WishList</h1>
                <ul className="ml-5">
                    <li className="text-gray-500">My Wishlist</li>
                </ul>
            </div>
        </div>
    )
}

export default AccountMenu
