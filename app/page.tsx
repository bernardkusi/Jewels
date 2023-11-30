import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import Image from "next/image";

export default function Home() {
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
