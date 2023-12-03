import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const Cartitem = () => {
  return (
    <div className="cartitem">
    <div className="image">
        <Image alt="Hero image" objectFit="cover" fill src={"/bacd2.jpg"} />
    </div>
    <div className="details">
        <p className="itemname">Diamond Ring</p>
        <p className="itemdescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit fuga architecto velit tempore? Esse excepturi quo delectus quae rem obcaecati accusantium autem? Aspernatur.
        </p>
        <p className="rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
        </p>
        <p className="itemprice">
            $3000.00
        </p>
    </div>

    <div className="buttons">
        <button className="click">Remove</button>
    </div>
</div>
  )
}

export default Cartitem
