import React from 'react';
import Link from 'next/link';
import { client, urlFor } from '../lib/client';
import { Header, Footer } from '../components';

const exhibitionsCurrent = ({getCurrentExhibition}) => {
  
  return (
    <div>
      <Header />
      <main className="main-exhibitions">
            <div className="title">
                    <div className="title-line-left"></div>
                    <h2>exhibitions</h2>
                    <div className="title-line-right"></div>
            </div>
            <div className="exhibition-content">
                <div className='navbar-wrapper'>
                    <div className="exhibitions-navbar">
                        <Link href="/past">past</Link>
                        <Link href="/current">current</Link>
                        <Link href="/future">future</Link>
                    </div>
                </div>
                {getCurrentExhibition && getCurrentExhibition.map((getCurrentExhibition, index) => (
                    <div className="ex-body">
                        <ul>
                            <li key="index"><img src={urlFor(getCurrentExhibition.exhibition_image).auto("format").url()} alt={getCurrentExhibition.exhibition_alt}/></li>
                            <li className="ex-bodyContent">
                                <h3 className="ex-bodyName">{getCurrentExhibition.exhibition_name}</h3>
                                <span className="ex-bodyRest">{getCurrentExhibition.address}<br></br>{getCurrentExhibition.exhibition_dates}</span>
                            </li>
                        </ul>
                        <div className="division-line"></div>
                    </div>
                ))}
            </div>
        </main>
      {/* <Footer /> */}
    </div>
  )
}

export default exhibitionsCurrent

export const getServerSideProps = async (pageContext) => {
    const exhibitionQuery = `*[_type == 'exhibitions' && exhibition_status == 'current']
    {exhibition_image{asset->{_id, url}}, exhibition_name, exhibition_alt, exhibition_dates, address, exhibition_status}`;
    const getCurrentExhibition = await client.fetch(exhibitionQuery)

    return {
        props: {getCurrentExhibition}
    }
}