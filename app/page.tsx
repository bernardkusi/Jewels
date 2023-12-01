import Link from "next/link";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import Product from "./components/Product";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function Home() {

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
      <div id="hero">
        <Image alt="Hero image" objectFit="cover" fill src={"/bacd1.jpg"} />
        <div>
          <h1>Lorem ipsum dolor sit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tempora illum repellat!</p>
          <a href="#" className="click">View Store</a>
        </div>
      </div>

      <div id="products">
        <div className="page">
          <h4 className="heading">Our Popular Products</h4>
          <p className="subheading">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <div className="productgrid">
            {products.map(product=>(<Product product={product} />))}
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

      <div id="about">
        <Image alt="Hero image" objectFit="cover" fill src={"/bacd4.jpg"} />
        <div className="page">
          <h4 className="heading" style={{ textAlign: "center", paddingBottom: "1.5rem" }}>About Us</h4>
          <p className="abouttext">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error consequatur eum porro, corporis pariatur repudiandae quos laboriosam labore eaque commodi amet excepturi, nam voluptatum deserunt quam odio fugit dolorum voluptatibus. Tenetur facilis iste sequi voluptas et libero. Assumenda, distinctio laboriosam? Esse repellendus maxime id quo.

            <br />
            <Link href={'/about'} className="click">Learn More</Link>
          </p>
        </div>
      </div>

      <div id="products">
        <div className="page">
          <h4 className="heading">Our Popular Products</h4>
          <p className="subheading">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <div className="productgrid">
          {products.map(product=>(<Product product={product} />))}
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

      <div id="reviews">
      <Image alt="Hero image" objectFit="cover" fill src={"/bacd4.jpg"} />
        <div className="page">
          <h4 className="heading">Customer Reviews</h4>
          <div className="reviewflex">
            <div className="review">
              <p className="name">Bernard Kusi</p>
              <p className="comment">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto molestias deleniti culpa.
              </p>
              <p className="rating">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </p>
            </div>
            
            <div className="review">
              <p className="name">Bernard Kusi</p>
              <p className="comment">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto molestias deleniti culpa.
              </p>
              <p className="rating">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </p>
            </div>
            <div className="review">
              <p className="name">Bernard Kusi</p>
              <p className="comment">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto molestias deleniti culpa.
              </p>
              <p className="rating">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
