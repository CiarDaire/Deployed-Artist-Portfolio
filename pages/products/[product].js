import React from 'react'
import { client, urlFor } from '../../lib/client';
import { Header, Footer } from '../../components';

const slugProduct = ({getProductDetails}) => {

   return (
      <div>
         <Header />
         <main className="main-product">
            <div className="title">
               <div className="title-line-left"></div>
                  <h2>purchase</h2>
               <div className="title-line-right"></div>
            </div>
            <div className="product-body">
               <div className="product-content">
                  <figure className="productPhoto-position">
                     <img src={urlFor(getProductDetails.productImage).auto('format').url()} alt={getProductDetails.productName} className="product-photo"/>
                  </figure>  
                  <div className="product-details">
                     <div className="phone-flexRow">
                        <h3>{getProductDetails.productName}</h3>
                        <h4>${getProductDetails.price}.00</h4>
                     </div>
                     <ul className="extra-info">
                        <li>{getProductDetails.size}</li>
                        <li>{getProductDetails.materials}</li>
                        <li>{getProductDetails.date}</li>
                     </ul>
                     <div className="product-buttons">
                        <a href="../contact"><button className="enquire-btn">Enquire</button></a>
                     </div>
                  </div>
               </div>
            </div>
         </main>
      {/* <Footer /> */}
    </div>
  )
}

export const getServerSideProps = async (pageContext) => {
   const productSlug = pageContext.query.product;

   const productDetailsQuery = `*[_type == 'products' && slug.current == $productSlug][0]{productName, slug, price, productImage{
   asset->{_id, url}}, materials, date, size}`;
   const getProductDetails = await client.fetch(productDetailsQuery, {productSlug} );

   return {
      props: {getProductDetails}
   }
}

export default slugProduct