import React, { useState } from 'react';
import { client, urlFor } from '../lib/client';
import { Header, Footer } from '../components';
import Image from 'next/image';

const sets = ({setData, imagesData}) => {

  //slideshow

  const [slideIndex, setSlideIndex] = useState(0);
  const [openImage, setOpenImage] = useState(false);

  const handleOpenImage = (index) => {
      setSlideIndex(index)
      setOpenImage(true)
  }

  const handleCloseImage = () => {
      setOpenImage(false)
  }

  const slidePrev = () => {
    slideIndex <= 0
    ? setSlideIndex(imagesData.imageItems.length -1 ) 
    : setSlideIndex(slideIndex - 1);
  }

  const slideNext = () => {
    slideIndex >= imagesData.imageItems.length -1 
    ? setSlideIndex(0) 
    : setSlideIndex(slideIndex + 1);
  }

  return ( 
    <div> 
      <Header />
      <main className="slug-gallery"> 
        <div className="title">
            <div className="title-line-left"></div>
              <h2>{setData.set_name}</h2>
            <div className="title-line-right"></div>
        </div>
        <div className="images-container">
        <div className="slideshow">
          {openImage &&
            <div className='slideshowBtns'>
                <img src="./images/cancel.png" className="closeBtn" onClick={handleCloseImage} alt='Exit Slide Button'/>
                <img src="./images/left-arrow-angle-big-gross-symbol.png" className="prevArrow" onClick={slidePrev} alt="Previous Image Button"/>
                <img src="./images/arrow-angle-pointing-to-right.png" className="nextArrow" onClick={slideNext} alt="Next Image Button"/>
                {imagesData.imageItems && 
                <div className="fullscreenImage">
                    <img src={urlFor(imagesData.imageItems[slideIndex].image).auto('format').url()} alt='tryit' 
                    className="singleImage" />
                    <div className="imageDetails">
                      <span>{imagesData.imageItems[slideIndex].name}</span>
                      <span>{imagesData.imageItems[slideIndex].date}</span>
                      <span>{imagesData.imageItems[slideIndex].materials}</span>
                      <span>{imagesData.imageItems[slideIndex].size}</span>
                    </div>
                </div>
                }
            </div>
          }
        </div>
          <ul className="overall-images">
          {imagesData.imageItems && imagesData.imageItems.map((imagesData, index) => (
            <li key={index}>
              <Image src={urlFor(imagesData.image).auto('format').url()}
                alt='image'
                layout='fill'
                onClick={() => handleOpenImage(index)}/>
            </li>
          ))}
          </ul>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default sets

export const getServerSideProps = async (pageContext) => {
  const setSlug = pageContext.query.images;

  const setQuery = `*[_type == 'set' && slug.current == $setSlug][0]`;
  const imagesQuery = `*[_type == 'set' && slug.current == $setSlug][0]{'imageItems':set_images[]{image{
    asset->{_id, url}}, alt, name, date, size, materials}}`;

  const setData = await client.fetch(setQuery, {setSlug});
  const imagesData = await client.fetch(imagesQuery, {setSlug});

  return {
    props: {setData, imagesData}
  }
}
  