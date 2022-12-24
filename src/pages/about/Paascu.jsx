import React from 'react';
import PageContent from '../../components/PageContent';
import { paascu } from '../../constants/Items';

const Paascu = () => (
  <PageContent>
    <div className='page-wrap'>
      <div className='page-content'>
        <ol>
          {paascu.map((item) => (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <ul>
                  {item.text.map((text, index) => (
                      <li key={index}>
                        <p>{text}</p>
                      </li>
                    )
                  )}
                </ul>
              </li>
            )
          )}
        </ol>
      </div>
    </div>
  </PageContent>
)

export default Paascu