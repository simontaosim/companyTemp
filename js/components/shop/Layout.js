'use strict';

import React from 'react';
import MobileBottomNavBar from './MobileBottomNavBar';



class Layout extends React.Component {

  render() {
    return (
      <div className="container-fluid" style={{ width: "98.5%", height: "100%" }}>

        <div className="container-fluid">

          <div>
              {this.props.children}
          </div>
          <br/><br/>
          <br/><br/>
       </div>
       <MobileBottomNavBar />
      </div>
    );
  }
}

export { Layout as default };
