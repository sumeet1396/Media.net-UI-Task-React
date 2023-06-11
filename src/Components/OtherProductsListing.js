import React from "react";
import Cards from "./Cards";
import {OTHER_PRODUCTS_LIST} from '../constants'

const OtherProductsListing = () => {
    return (
        <div className="other-products-container">
            <div className="wrapper">
                <span className="related-topic">You may also be interested in:</span>
                <div className="other-product">
                    <div className="other-product-listing flex card-grid-3">
                        {OTHER_PRODUCTS_LIST.map(product =><Cards key={product?.title} card={product} type={'others'}/>) }
                    </div>
                    <span className="add-text right-text">Ads</span>
                </div>
            </div>
        </div>
    )
}

export default OtherProductsListing;