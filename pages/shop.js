import React from 'react';
import { client, urlFor } from '../lib/client';
import { Header, Footer } from '../components';
import Link from 'next/link';

const Shop = ({getProduct}) => {
  
  return (
    <div>
      <Header />
      <main className="main-shop">
            <div className="title">
                <div className="title-line-left"></div>
                <h2>for sale</h2>
                <div className="title-line-right"></div>
            </div>
            <div className="shop">
              <ul className="products">
                {getProduct && getProduct.map((getProduct, index) => (
                  <Link href={`/products/${getProduct.slug.current}`}>
                    <li key={index}>
                      <a href="./products/[product].js"><img src={urlFor(getProduct.productImage).auto('format').url()} alt={getProduct.productName}/></a>
                      <span className="product-name">{getProduct.productName}</span>
                      <span className="product-price">${getProduct.price}.00</span>
                    </li>
                  </Link>
                ))}
              </ul>
          </div>
      </main>
    </div>
  )
}

export default Shop

export const getServerSideProps = async (pageContext) => {
  const productQuery = `*[_type == 'products']{productName, slug, price, productImage}`;
  const getProduct = await client.fetch(productQuery);

  return {
    props: {getProduct}
  }
}