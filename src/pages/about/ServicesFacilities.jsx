import React from 'react';
import PageContent from '../../components/PageContent';
import { services } from '../../constants/Items';

const ServicesFacilities = () => (
  <PageContent>
    <div className='page-wrap'>
      <div className='page-content'>
        <h2>Services & Facilities</h2>
        <ul>
          {services.map((item) => (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  </PageContent>
)

export default ServicesFacilities