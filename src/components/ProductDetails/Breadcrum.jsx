import React from 'react'

const Breadcrum = ({ category, title }) => {
    return (
        <div className="my-10">
            <h1 className="md:text-base text-xs">
                Home / products /{category}/{title}
            </h1>
        </div>
    )
}

export default Breadcrum
