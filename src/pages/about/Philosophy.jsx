import React from 'react';
import PageContent from '../../components/PageContent';
import { philosophy } from '../../constants/Items';

const Philosophy = () => (
  <PageContent>
    <div className='page-wrap'>
      <div className='page-content'>
        <ul>
          {philosophy.map((item) => (
              <li key={item.id} className='list-none'>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  </PageContent>
  
)

export default Philosophy