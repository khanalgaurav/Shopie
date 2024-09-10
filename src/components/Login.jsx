import React, { useEffect, useState } from 'react'
import loginImage from '../assets/login-image.png'
import { FcGoogle } from 'react-icons/fc'
import { NavLink } from 'react-router-dom'
const LoginSignup = () => {
    const [loginStatus, setLoginStatus] = useState(true)
    const [userEmail, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let numberRegex = /^[0-9]{10}$/
    let passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    const handleLogin = (e) => {
        e.preventDefault()
        if (userEmail == '') {
            alert('Please enter your email or phone number')
            return false
        } else if (password == '') {
            alert('Please your password')
        } else if (
            !userEmail.match(validRegex) &&
            !userEmail.match(numberRegex)
        ) {
            alert('Please enter a valid phone number or email address')
            return false
        } else {
            setPassword('')
            setUserEmail('')
            return true
        }
    }

    const handleSignup = (e) => {
        e.preventDefault()
        if (userEmail == '') {
            alert('Please enter your email or phone number')
            return false
        }
        if (!userEmail.match(validRegex) && !userEmail.match(numberRegex)) {
            alert('Please enter a valid phone number or email address')
            return false
        } else if (password == '') {
            alert('Please your password')
        } else if (!password.match(passwordRegex)) {
            alert(
                'The Password must Contain:\n Minimum eight characters \n At least one uppercase letter\n One lowercase letter\n One number \n One special character'
            )
        } else {
            setUserEmail('')
            setPassword('')
            setUserName('')
            return true
        }
    }

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
                            onChange={(e) => {
                                setUserEmail(e.target.value)
                            }}
                            value={userEmail}
                            className="border-b py-1 mb-10 border-gray-400 focus:outline-none"
                            type="text"
                            placeholder="Email or Phone Number"
                        />
                        <input
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            value={password}
                            className="border-b py-1 mb-2 border-gray-400 focus:outline-none"
                            type="password"
                            placeholder="Password"
                        />
                        <p className="mb-10 text-orange cursor-pointer">
                            Forgot Password ?
                        </p>
                        <button
                            onClick={handleLogin}
                            className="text-white bg-orange px-3 py-2 mb-4"
                        >
                            Login
                        </button>
                        <button
                            onClick={(e) => e.preventDefault()}
                            className="border py-2 flex gap-5 justify-center items-center px-3 border-black mb-8"
                        >
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
                            onChange={(e) => {
                                setUserName(e.target.value)
                            }}
                            value={userName}
                            className="border-b py-1 mb-10 border-gray-400 focus:outline-none"
                            type="text"
                            placeholder="Username"
                        />
                        <input
                            onChange={(e) => {
                                setUserEmail(e.target.value)
                            }}
                            value={userEmail}
                            className="border-b py-1 mb-10 border-gray-400 focus:outline-none"
                            type="text"
                            placeholder="Email or Phone Number"
                        />
                        <input
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            value={password}
                            className="border-b py-1 mb-10 border-gray-400 focus:outline-none"
                            type="password"
                            placeholder="Password"
                        />
                        <button
                            onClick={handleSignup}
                            className="text-white bg-orange px-3 py-2 mb-4"
                        >
                            Create Account
                        </button>
                        <button
                            onClick={(e) => e.preventDefault()}
                            className="border py-2 flex gap-5 justify-center items-center px-3 border-black mb-8"
                        >
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
