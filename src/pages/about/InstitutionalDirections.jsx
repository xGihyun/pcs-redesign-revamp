import React from 'react';
import PageContent from '../../components/PageContent';
import { institutionDirection as institution } from '../../constants/Items';

const InstitutionalDirections = () => (
  <PageContent>
    <div className='page-wrap'>
      <div className='page-content'>
        <h2>Institutional Directions</h2>
        <p className='text-center'>The 6 Institutional Directions are in support of the school's process in sustaining the ongoing PAASCU accreditation.</p>
        <ol>
          {institution.map((item) => (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            )
          )}
        </ol>
      </div>
    </div>
  </PageContent>
)


export default InstitutionalDirections