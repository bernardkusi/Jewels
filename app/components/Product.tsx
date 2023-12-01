import Image from 'next/image'
import React from 'react'

type Props={
  product:product
}

// type Products=product[];

const Product = ({product}:Props) => {
  return (
    <div className="product">
    <div className="image">
      <Image src={`/${product.image}.jpg`} alt='image3' fill objectFit='cover'/>
    </div>
    <div className="details">
      <p className="name">{product.name}</p>
      <p className="price">${product.price}</p>
      <p className="rating"></p>
      <button className="click">Buy Now</button>
    </div>
  </div>
  )
}

export default Product
