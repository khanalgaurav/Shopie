import React from 'react'

const CategoryCard = ({ icon, title }) => {
    return (
        <article className="flex flex-col items-center border-2 rounded-md border-gray-300 p-5 h-40 w-52  hover:bg-orange hover:text-white cursor-pointer">
            <p className="font-bold text-5xl ">{icon}</p>
            <h1 className="text-lg pt-5">{title}</h1>
        </article>
    )
}

export default CategoryCard
