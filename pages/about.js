import React from 'react';
import { client, urlFor } from '../lib/client';
import { Header, Footer } from '../components';


const about = ({getAboutQuery}) => {

   console.log(getAboutQuery.aboutText)
   return (
      <div>
         <Header />
         <main className="main-about">
               <div className="about-body">
                  <div className="about-title">
                     <div className="title-line-left"></div>
                     <h2>about</h2>
                     <div className="title-line-right"></div>
                  </div>
                  <div className="about-content">
                     {getAboutQuery && getAboutQuery.map((getAboutQuery, index) => (
                           <figure className="photo-position">
                              <img src={urlFor(getAboutQuery.aboutImage).auto('format').url()} alt={getAboutQuery.alt} className="about-photo"/>
                           </figure>
                      ))}
                     <div className="about-text">
                           <p className="pronouns">(they/them)</p>
                           <p className="textBody"></p>
                           {getAboutQuery && getAboutQuery.map((getAboutQuery, index) => ( 
                              <p>{getAboutQuery.aboutText}</p>
                           ))}
                     </div>
                  </div>
               </div>
         </main>
         {/* <main className="main-about">
            <div className="about-body">
               {getAboutQuery && getAboutQuery.map((getAboutQuery, index) => (
                  <figure className="photo-position">
                     <img src={urlFor(getAboutQuery.aboutImage).auto('format').url()} alt={getAboutQuery.alt} className="about-photo"/>
                  </figure>
               ))}
               <div className="about-content">
                  <div className="about-title">
                     <div className="title-line-left"></div>
                     <h2>about</h2>
                     <div className="title-line-right"></div>
                  </div>
                  <div className="about-text">
                     <p className="pronouns">(they/them)</p>
                     <p className="textBody">
                     {getAboutQuery && getAboutQuery.map((getAboutQuery, index) => ( 
                        <p>{getAboutQuery.aboutText}</p>
                     ))}
                     </p>
                  </div>
               </div>
            </div>
         </main> */}
         {/* <Footer /> */}
      </div>
  )
}

export default about

export const getServerSideProps = async (pageContext) => {
    const queryAbout = `*[_type == 'about']{alt, aboutText, aboutImage{asset->{_id, url}}}`;
    const getAboutQuery = await client.fetch(queryAbout);

    return{
        props: {getAboutQuery}
    }
}