'use strict';

import React from 'react';

class Templete extends React.Component {

  constructor(props) {
      super(props);
  }

  componentDidMount() {
    $("#topNav li:eq(0)").css("width", "25%");
    $("#topNav li:eq(1)").css("width", "50%");
    $("#topNav li:eq(2)").css("width", "25%");
  }

  render() {
    return (
      <div className="navbar navbar-fixed" style={{width: "100%"}}>
      <nav>
          <div className="nav-wrapper">
            <ul style={{width: "100%"}} id="topNav">
              <li style={{textAlign: "center"}} onClick={this.props.leftClick}>{this.props.leftItem}&nbsp;</li>
              <li style={{textAlign: "center"}}><a style={{fontSize: "20px"}}>{this.props.children}</a></li>
              <li style={{textAlign: "right"}}>{this.props.rightItem}&nbsp;</li>
            </ul>
          </div>
      </nav>
      </div>
    );
  }
}

export { Templete as default };
