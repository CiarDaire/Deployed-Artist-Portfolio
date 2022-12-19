import React from 'react';
import { client } from '../lib/client';
import { Header, Footer } from '../components';
import PortableText from "react-portable-text";

const Help = ({getHelpInfo}) => {

  return (
    <div>
      <Header />
      <main className="main-help">
            <div className="title">
                <div className="title-line-left"></div>
                <h2>user guide</h2>
                <div className="title-line-right"></div>
            </div>
            {getHelpInfo && getHelpInfo.map((item, index) => (
                <div className="guide">
                    <h3>{item.title}</h3>
                    <PortableText
                      dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                      projectID={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                      content={item.body[0]}
                      serializers={{  
                      }}
                    />
                    <div className="division-line"></div>
                </div>
            ))}
        </main>
    </div>
  )
}

export default Help

export const getServerSideProps = async (pageContext) => {
  const helpQuery = `*[_type == 'userGuide']{title, body}`
  const getHelpInfo = await client.fetch(helpQuery);

  return {
    props: {getHelpInfo}
  }
}