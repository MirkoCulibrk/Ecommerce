import React from 'react'
import Product from './Product';
const ProductList = ({data}) => {
    return (
        <React.Fragment>

            {data.map(product => <Product product={product}></Product>)}
        </React.Fragment>
    )
}

export default ProductList
