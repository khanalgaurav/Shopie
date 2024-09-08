import React, { useState } from 'react'
import loginImage from '../assets/login-image.png'
import { FcGoogle } from 'react-icons/fc'
import { NavLink } from 'react-router-dom'
const LoginSignup = () => {
    const [loginStatus, setLoginStatus] = useState(true)

    return (
        <section className="md:my-8 my-3 md:flex-row flex-col flex gap-10 md:gap-32 items-center">
            <div className="">
                <img
                    className="w-[700px]"
                    src={loginImage}
                    alt="side login image"
                />
            </div>
            {loginStatus ? (
                <div className="w-fit mb-5">
                    <h1 className="text-4xl mb-1">Login To Shopie</h1>
                    <h5>Enter your details below</h5>
                    <form className="flex flex-col mt-12" action="">
                        <input
                            className="border-b py-1 mb-10 border-gray-400 focus:outline-none"
                            type="text"
                            placeholder="Email or Phone Number"
                        />
                        <input
                            className="border-b py-1 mb-2 border-gray-400 focus:outline-none"
                            type="password"
                            placeholder="Password"
                        />
                        <p className="mb-10 text-orange cursor-pointer">
                            Forgot Password ?
                        </p>
                        <button className="text-white bg-orange px-3 py-2 mb-4">
                            Login
                        </button>
                        <button className="border py-2 flex gap-5 justify-center items-center px-3 border-black mb-8">
                            <FcGoogle className="h-6 w-6" />
                            Sign in with Google
                        </button>
                        <p className="flex justify-center">
                            Don't have an account ?{' '}
                            <span
                                onClick={() => {
                                    setLoginStatus(false)
                                }}
                                className="text-blue-600 underline cursor-pointer"
                            >
                                Signup
                            </span>
                        </p>
                    </form>
                </div>
            ) : (
                <div className="w-fit mb-5">
                    <h1 className="text-4xl mb-1">Create an account</h1>
                    <h5>Enter your details below</h5>
                    <form className="flex flex-col mt-12" action="">
                        <input
                            className="border-b py-1 mb-10 border-gray-400 focus:outline-none"
                            type="text"
                            placeholder="Username"
                        />
                        <input
                            className="border-b py-1 mb-10 border-gray-400 focus:outline-none"
                            type="text"
                            placeholder="Email or Phone Number"
                        />
                        <input
                            className="border-b py-1 mb-10 border-gray-400 focus:outline-none"
                            type="password"
                            placeholder="Password"
                        />
                        <button className="text-white bg-orange px-3 py-2 mb-4">
                            Create Account
                        </button>
                        <button className="border py-2 flex gap-5 justify-center items-center px-3 border-black mb-8">
                            <FcGoogle className="h-6 w-6" />
                            Sign up with Google
                        </button>
                        <p className="flex justify-center">
                            Already have an account ?{' '}
                            <span
                                onClick={() => {
                                    setLoginStatus(true)
                                }}
                                className="text-blue-600 underline cursor-pointer"
                            >
                                Login
                            </span>
                        </p>
                    </form>
                </div>
            )}
        </section>
    )
}

export default LoginSignup
