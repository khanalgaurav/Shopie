import React from 'react'
import { useGlobalContext } from '../ShopContext'

const EditProfile = () => {
    const { userName, setUserName, userEmail, setUserEmail, isLoggedIn } =
        useGlobalContext()
    return (
        <div className="shadow-md shadow-gray-300 rounded-md w-full py-10 px-16">
            <form action="" className="text-lg">
                <label className="font-bold text-2xl" htmlFor="">
                    Edit Profile
                </label>
                <div className="md:flex justify-between my-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Username</label>
                        <input
                            className="bg-gray-200 px-3 py-1 rounded-md md:w-80"
                            onChange={(e) => setUserName(e.target.value)}
                            type="text"
                            placeholder="Username"
                            value={userName}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Email</label>
                        <input
                            className="bg-gray-200 px-3 py-1 rounded-md md:w-80"
                            onChange={(e) => setUserEmail(e.target.value)}
                            type="email"
                            placeholder="Email address"
                            value={userEmail}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-3 my-5">
                    <label htmlFor="">Change Password</label>
                    <input
                        className="bg-gray-200 px-3 py-1 rounded-md"
                        onChange={(e) => setUserPassword(e.target.value)}
                        type="password"
                        placeholder="New Password"
                    />
                    <input
                        className="bg-gray-200 px-3 py-1 rounded-md"
                        type="password"
                        placeholder="Confirm Password"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={(e) => e.preventDefault()}
                        className="bg-orange px-5  py-1 rounded-md text-white my-3"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditProfile
