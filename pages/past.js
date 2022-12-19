import React from 'react';
import Link from 'next/link';
import { client, urlFor } from '../lib/client';
import { Header, Footer } from '../components';

const exhibitionsPast = ({getPastExhibition}) => {

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
            {getPastExhibition && getPastExhibition.map((getPastExhibition, index) => (
                <div className="ex-body">
                    <ul>
                        <li key="index"><img src={urlFor(getPastExhibition.exhibition_image).url()} alt={getPastExhibition.exhibition_alt}/></li>
                        <li className="ex-bodyContent">
                            <h3 className="ex-bodyName">{getPastExhibition.exhibition_name}</h3>
                            <span className="ex-bodyRest">{getPastExhibition.address}<br></br>{getPastExhibition.exhibition_dates}</span>
                        </li>
                    </ul>
                    <div className="division-line"></div>
                </div>
            ))}
        </main>
    </div>
  )
}

export default exhibitionsPast

export const getServerSideProps = async (pageContext) => {
    const exhibitionPastQuery = `*[_type == 'exhibitions' && exhibition_status == 'past']
    {exhibition_image{asset->{_id, url}}, exhibition_name, exhibition_alt, exhibition_dates, address, exhibition_status}`;
    const getPastExhibition = await client.fetch(exhibitionPastQuery)

    return {
        props: {getPastExhibition}
    }
}