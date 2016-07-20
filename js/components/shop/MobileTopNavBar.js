'use strict';

import React from 'react';
import {Router, Route, hashHistory, Link, IndexRoute} from 'react-router';


class MobileTopNavBar extends React.Component {

  componentDidMount() {

  }

  handleLeftBtnTap() {
    let leftFunction = this.props.leftIconFunction;
    $("#mobileTopLeftBtn").click(function(){
      if (leftFunction == "back") {
          hashHistory.goBack();
        $("#mobileBottomNav .item").removeClass("active");
      }
    });
  }

  render() {
    return (
      <div>
      <div className="ui center aligned grid" id="mobileTopNav" style={{ zIndex: 500, height: "auto", width: "106%", position: "fixed", top: "0px", paddingTop: "13px", backgroundColor: "#005CAF", color: "white" }}>
        <div id="mobileTopLeftBtn" className="column" style={{ width: "18.75%"}} onTouchTap={this.handleLeftBtnTap.bind(this)}>
          <i className={this.props.leftIcon+" icon"}></i>
        </div>
        <div className="column" style={{ width: "62.5%", fontSize: "x-large", paddingTop: '20px'}}>{this.props.children}</div>
        <div className="column" style={{ width: "18.75%"}}>&nbsp;</div>
     </div>
     </div>
    );
  }
}

export { MobileTopNavBar as default };
