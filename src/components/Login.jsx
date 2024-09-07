import React from 'react'
import loginImage from '../assets/login-image.png'
import { FcGoogle } from 'react-icons/fc'
const LoginSignup = () => {
    return (
        <section className="my-8 flex gap-32 items-center">
            <div className="">
                <img
                    className="w-[700px]"
                    src={loginImage}
                    alt="side login image"
                />
            </div>
            <div className="w-fit">
                <h1 className="text-4xl">Create an account</h1>
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
                        Already have an account ? <span>Login</span>
                    </p>
                </form>
            </div>
        </section>
    )
}

export default LoginSignup
