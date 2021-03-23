import React from 'react'

const Product = ({product}) => {
    return (
        <div className="col-lg-4 ">
            <div className="img-container">
                <img src={product.imgUrl} alt={product.name}></img>
            </div>
            <div className="info-container d-flex flex-column">
                <h5 className="text-uppercase">{product.name}</h5>
                <p>{product.description}</p>
                <div className="info-container--info d-flex flex-row">
                    <h6>{`$${product.price}`}</h6>
                    {/* stars */}
                </div>
            </div>
            
        </div>
    )
}

export default Product
