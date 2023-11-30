import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div>
                <p className="about">
                <Link href="/" className="logo">Jewels</Link> <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nemo minus, rem aut aliquid veniam eaque modi! Sequi vel vitae quae maxime possimus alias similique. Quasi eaque dolorem accusamus architecto dolor facere rem dignissimos provident a. Fugit aut corporis ullam nisi exercitationem nemo illo tenetur?
                </p>

                <ul>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Products</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </ul>

                <ul>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Products</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </ul>
            </div>

            <p className="copy">Copyright &copy;2023</p>
        </footer>
    )
}

export default Footer
