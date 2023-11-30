import Image from 'next/image'
import React from 'react'

type Productprops={image?:string}

const Product = ({image="necklace1"}:Productprops) => {
  return (
    <div className="product">
    <div className="image">
      <Image src={`/${image}.jpg`} alt='image3' fill objectFit='cover'/>
    </div>
    <div className="details">
      <p className="name">Diamond Ring</p>
      <p className="price">$2000.00</p>
      <p className="rating"></p>
      <button className="click">Buy Now</button>
    </div>
  </div>
  )
}

export default Product
