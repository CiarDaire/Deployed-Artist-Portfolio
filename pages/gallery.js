import React from 'react';
import { client, urlFor } from '../lib/client';
import { Header, Footer} from '../components';
import Link from 'next/link';

const gallery = ({setImage}) => {

  return (
    <div>
    <Header />
    <main className="main-gallery"> 
      <div className="title">
          <div className="title-line-left"></div>
          <h2>gallery</h2> 
          <div className="title-line-right"></div>
      </div>
      <div className="sets">
          <ul className="sets-container">
            {setImage && setImage.map((setImage, index) => (
              <Link href={`/${setImage.slug.current}`}>
                <li key={index}>
                  <span>{setImage.set_name}</span>
                  <a href="./[images].js"><img src={urlFor(setImage.setSelect.image).auto('format').url()} alt={setImage.set_name}/></a>
                </li>
              </Link>
            ))}
          </ul>
      </div>
    </main>
    {/* <Footer /> */}
    </div>
  )
}

export const getServerSideProps = async (pageContext) => {
  const setImageQuery = `*[_type == 'set']{set_name, slug, 'setSelect': set_images[0], imageItem{image->{asset->{_id, url}}}}`
  const setImage = await client.fetch(setImageQuery);

  return {
    props: {setImage}
  }
}

export default gallery