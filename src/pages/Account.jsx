import React from 'react'
import { useGlobalContext } from '../components/ShopContext'
import AccountMenu from '../components/Account/AccountMenu'
import EditProfile from '../components/Account/EditProfile'
import { Link } from 'react-router-dom'

const Account = () => {
    const { userName, isLoggedIn } = useGlobalContext()
    return (
        <div className="md:mx-32 mx-10">
            <div className="flex justify-between my-10">
                <p className="text-gray-400">
                    Home / <span className="text-black">My Account</span>
                </p>
                <p>
                    Welcome! <span className="text-orange">{userName}</span>
                </p>
            </div>
            {isLoggedIn ? (
                <div className="md:flex-row flex flex-col gap-20 mb-10">
                    <AccountMenu />
                    <EditProfile />
                </div>
            ) : (
                <div className="my-20">
                    <p className="font-bold text-xl my-5">
                        Login or Signup To Access This Page
                    </p>
                    <Link to={'/login'}>
                        <button className="bg-orange px-4 py-1 text-white rounded-md">
                            Login
                        </button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Account
