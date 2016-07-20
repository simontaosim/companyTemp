'use strict';

import React from 'react';


class PicCarousel extends React.Component {



  componentDidMount() {
     $('.bxslider').bxSlider({auto: true});
  }



  render() {
    return (
      <div className="container-fluid" id="picCarousel">
        {/*<div id="picCarouselController" style={{ position: "relative", top: '50%' }}>
          <div style={{float: "left"}}><i className="caret left big icon"></i></div>
          <div style={{float: "right"}}><i className="caret right big icon"></i></div>
        </div>*/}
        <ul className="bxslider">
            <li><img src="images/01.jpg" /></li>
            <li><img src="images/home-banner2.jpg" /></li>
            <li><img src="images/home-banner3.jpg" /></li>
            <li><img src="images/home-banner4.jpg" /></li>
        </ul>

        <p>&nbsp;</p>
      </div>
    );
  }
}

export { PicCarousel as default };
