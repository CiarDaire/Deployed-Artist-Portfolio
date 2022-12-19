import React from 'react';
import { Header, Footer } from '../components';

const Home = () => {
  return (
    <div>
      <Header />
      <div>
          <h1>LU STEVEN</h1>
          <figure className="home-art">
            <img src='./images/home-art.png' alt="landing page art: desktop" className="full-homeImg"></img>
            <img src="./images/tablet-homeImg.png" alt="landing page art: tablet" className="tablet-homeImg"/>
          </figure>
      </div>
    </div>
  )
}

export default Home;