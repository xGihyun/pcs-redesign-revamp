import React from 'react';
import PageContent from '../../components/PageContent';
import { goals, coreValues } from '../../constants/Items';

const GoalsCoreValues = () => (
  <PageContent>
    <div className='page-wrap'>
      <div className='page-content'>
        <h2>Goals</h2>
        <ol>
          {goals.map((item) => (
              <li key={item.id}>
                <p>{item.text}</p>
              </li>
            )
          )}
        </ol>
        <h2>Core Values</h2>
        <ol>
          {coreValues.map(item => {
            return (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <ul>
                  {item.text.map((text, index) => (
                      <li key={index}>{text}</li>
                    )
                  )}
                </ul>
                <h4>Related Values:</h4>
                <ol>
                  {item.values.map((value, index) => (
                      <li key={index}>{value}</li>
                    )
                  )}
                </ol>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  </PageContent>
)


export default GoalsCoreValues