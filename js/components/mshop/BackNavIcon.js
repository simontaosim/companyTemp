'use strict';

import React from 'react';

class BackNavIcon extends React.Component {
  render() {
    return (
      <i className="large material-icons left"
      style={{fontSize: "37px", position: "relative", fontWeight: "bolder", top: "10px", left: "20px"}}>
      arrow_back</i>
    );
  }
}
export { BackNavIcon as default };
