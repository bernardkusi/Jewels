import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import Cartitem from '../components/Cartitem'

const page = () => {
    return (
        <>
            <div id="cart">
                <div className="page">
                    <div className="cart">
                      
                     <Cartitem/>
                     <Cartitem/>
                     <Cartitem/>
                     <Cartitem/>
                     <div className="cartitem">
                       <div>
                       <p className="description">Items in cart : 8</p>
                        <p className="description">Items Cost : $300.00</p>
                        <p className="description">Delivery Cost  : $0.00</p>
                        <p className="total">Total Amount payable : <span className="total"> $300.00</span> </p>
                       </div>

                       <div className='buttons'>
                        <button className="click">Order now</button>
                        <button className="click">Empty cart</button>
                       </div>
                     </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
