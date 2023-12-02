import Image from 'next/image'
import React from 'react'

type Props = {
  maintext: string,
  subtext?: string
}

const Banner = ({ maintext, subtext }: Props) => {
  return (
    <div className='banner'>
      <Image alt="Hero image" objectFit="cover" fill src={"/bacd2.jpg"} />
      <div>
        <h4 className="maintext">
          {maintext}
        </h4>
        <p className="subtext">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, incidunt aspernatur!
        </p>
      </div>
    </div>
  )
}

export default Banner
