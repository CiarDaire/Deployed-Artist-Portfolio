import React from 'react';
import Link from 'next/link';
import { client, urlFor } from '../lib/client';
import { Header, Footer } from '../components';

const exhibitionsFuture = ({getFutureExhibition}) => {

  return (
    <div>
      <Header />
      <main className="main-exhibitions">
            <div className="title">
                    <div className="title-line-left"></div>
                    <h2>exhibitions</h2>
                    <div className="title-line-right"></div>
                </div>
            <div className='navbar-wrapper'>
                <div className="exhibitions-navbar">
                    <Link href="/past">past</Link>
                    <Link href="/current">current</Link>
                    <Link href="/future">future</Link>
                </div>
            </div>
            {getFutureExhibition && getFutureExhibition.map((getFutureExhibition, index) => (
                <div className="ex-body">
                    <ul>
                        <li key="index"><img src={urlFor(getFutureExhibition.exhibition_image).url()} alt={getFutureExhibition.exhibition_alt} /></li>
                        <li className="ex-bodyContent">
                            <span className="ex-bodyName">{getFutureExhibition.exhibition_name}</span>
                            <span className="ex-bodyRest">{getFutureExhibition.address}<br></br>{getFutureExhibition.exhibition_dates}</span>
                        </li>
                    </ul>
                    <div className="division-line"></div>
                </div>
            ))}
        </main>
      {/* <Footer /> */}
    </div>
  )
}

export default exhibitionsFuture

export const getServerSideProps = async (pageContext) => {
    const exhibitionFutureQuery = `*[_type == 'exhibitions' && exhibition_status == 'future']
    {exhibition_image{asset->{_id, url}}, exhibition_name, exhibition_alt, exhibition_dates, address, exhibition_status}`;
    const getFutureExhibition = await client.fetch(exhibitionFutureQuery)

    return {
        props: {getFutureExhibition}
    }
}