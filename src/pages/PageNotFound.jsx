import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className="flex justify-center items-center my-10">
            <div className="p-20">
                <h1 className="text-7xl font-bold">404 Not Found</h1>
                <p className="text-center py-5">
                    The page you visited is not found. Please return to the home
                    page
                </p>
                <div className="flex justify-center">
                    <Link to="/">
                        <button className="bg-orange text-white py-2 px-5 rounded-md">
                            Back to Home page
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound
