import React from 'react';
import PageContent from '../../components/PageContent';
import { gradeSchool } from '../../constants/Items';

const GradeSchool = () => (
  <PageContent>
    <div className='page-wrap'>
      <div className='page-content'>
        <h2>The Grade School Department Objectives:</h2>
        <ol>
          {gradeSchool.map((text) => (
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

export default GradeSchool