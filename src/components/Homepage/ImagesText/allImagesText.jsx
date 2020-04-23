import React from 'react';

import '../../util/main.css'

export default ({ title , para})=> (
  <div className="HomepageAllImagesText">
    <div className="imageTexts">
        <h2>{title}</h2>
        <p>{para}</p>
    </div>
        {/* <style jsx>{`
        .HomepageAllImagesText .imageTexts{
            text-align: center;
            width: 50%;
            margin-left: 25%;
            color: white;
        }
        .HomepageAllImagesText .imageTexts h2 {
          font-size: 320%;
        }

        .HomepageAllImagesText .imageTexts p {
            font-size: 120%
          }

        @media only screen and (max-width: 800px){
          .HomepageAllImagesText .imageTexts{
                width: 70%;
                margin-left: 17%;
            }
        }

        @media only screen and (max-width:680px){
          .HomepageAllImagesText .imageTexts p{
            display:none;
          }  
          .HomepageAllImagesText .imageTexts{
                width: 70%;
                margin-left: 17%;
            }
            .HomepageAllImagesText .imageTexts h2 {
                font-size: 230%;
              }
      
              .HomepageAllImagesText .imageTexts p {
                  font-size: 100%
                }
        }
        
      `}</style> */}
     
    </div>

)