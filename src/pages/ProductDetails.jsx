import React from 'react'
import Breadcrum from '../components/ProductDetails/Breadcrum'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../components/ShopContext'
import ProductDisplay from '../components/ProductDetails/ProductDisplay'

const ProductDetails = () => {
    const id = useParams()

    const { allProducts } = useGlobalContext()
    const product = allProducts.find((i) => i.id == id.productId)
    const rProducts = allProducts
        .filter((i) => i.category === product.category)
        .filter((i) => i.id != product.id)
    return (
        <div className="md:mx-32 mx-10">
            <Breadcrum category={product.category} title={product.title} />
            <ProductDisplay
                image={product.images[0]}
                imageTitle={product.title}
                rating={Math.floor(product.rating)}
                reviews={product.reviews.length}
                stock={product.stock}
                price={product.price}
                desc={product.description}
                identity={product.id}
                relatedProducts={rProducts}
                title={product.title}
            />
        </div>
    )
}

export default ProductDetails
