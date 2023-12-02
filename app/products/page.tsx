import React from 'react'
import Product from '../components/Product'

const page = () => {

    const products:Products=[
        {id:1,name:"Diamond necklace1",price:3400.00,rating:5,image:"necklace1"},
        {id:2,name:"Diamond necklace2",price:4500.00,rating:5,image:"necklace2"},
        {id:3,name:"Diamond necklace3",price:2900.00,rating:4,image:"necklace3"},
        {id:4,name:"Diamond necklace4",price:5300.00,rating:5,image:"necklace4"},
        {id:5,name:"Diamond necklace5",price:4800.00,rating:4,image:"necklace5"},
        {id:6,name:"Diamond necklace6",price:3490.00,rating:5,image:"necklace6"},
        {id:7,name:"Diamond necklace7",price:6700.00,rating:4,image:"necklace7"},
        {id:8,name:"Diamond necklace8",price:3700.00,rating:5,image:"necklace8"},
      ]
    
    return (
        <>
            <div id="products">
                <div className="page">
                    <h4 className="heading">Our Popular Products</h4>
                    <p className="subheading">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <div className="productgrid">
                    {products.map(product=>(<Product key={product.id} product={product} />))}
                        {/* <Product image="necklace1" />
                        <Product image="necklace2" />
                        <Product image="necklace3" />
                        <Product image="necklace4" />
                        <Product image="necklace5" />
                        <Product image="necklace6" />
                        <Product image="necklace7" />
                        <Product image="necklace8" /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
