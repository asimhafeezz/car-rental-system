import React from 'react';

import '../../util/main.css'

export default ({ title , para})=> (
  <div className="HomepageAllImagesText">
    <div className="imageTexts">
        <h1>{title}</h1>
        <h5 style={{textAlign:'left' , fontWeight:'lighter'}}>{para}</h5>
    </div>
    </div>

)