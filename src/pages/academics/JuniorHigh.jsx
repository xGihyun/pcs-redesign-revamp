import React from 'react';
import PageContent from '../../components/PageContent';
import { juniorHigh } from '../../constants/Items';

const JuniorHigh = () => (
  <PageContent>
    <div className='page-wrap'>
      <div className='page-content'>
        <h2>High School education aims to develop its students in the following aspects:</h2>
        <ol>
          {juniorHigh.map((text) => (
              <li key={text.id} className='mb-4'>
                <span>{text.main}</span>
                <ol>
                  {text.sub.map((subs, index) => (
                      <li key={index}>{subs}</li>
                    )
                  )}
                </ol>
              </li>
            )
          )}
        </ol>
      </div>
    </div>
  </PageContent>
)

export default JuniorHigh