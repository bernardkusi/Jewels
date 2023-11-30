import React from 'react'
import Product from '../components/Product'

const page = () => {
    return (
        <>
            <div id="products">
                <div className="page">
                    <h4 className="heading">Our Popular Products</h4>
                    <p className="subheading">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <div className="productgrid">
                        <Product image="necklace1" />
                        <Product image="necklace2" />
                        <Product image="necklace3" />
                        <Product image="necklace4" />
                        <Product image="necklace5" />
                        <Product image="necklace6" />
                        <Product image="necklace7" />
                        <Product image="necklace8" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
