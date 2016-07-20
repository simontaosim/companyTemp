'use strict';

import React from 'react';
import {Link} from "react-router";


class BottomNavItem extends React.Component {

  getBadgeMassage(massage) {
    let badgeStyle = {
      textAlign: "center",
      borderRadius: "100px",
      WebkitBorderRadius: "100px",
      MozBorderRadius: "100px",
      position: "relative",
      top: "-208px",
      left: "51px",
      padding: "0px",
      margin: "0px",
      height: "20px",
      width: "20px",
      backgroundColor: "#c62828",
      color: "#fafafa"
    };
    if (massage > 0 && massage != undefined) {
        return (
          <div style={badgeStyle}
          >
          <span style={{fontSize: "12px", position: "relative", top: "-19px"}}>
          {massage}
          </span>
          </div>
        );
    }
    else{
      return ""
    }
  }

  render() {

    return (
      <li style={{ width: "25%"}}>
      <Link to={this.props.path} className="waves-purple grey-text text-darken-1" >
      <i className="large material-icons" aria-hidden="true">{this.props.icon}</i>
      <p style={{fontSize: '12px',top: '-52px',position: 'relative'}}>{this.props.textItem}</p>
      <p>&nbsp;</p>
      </Link>
      {this.getBadgeMassage(this.props.cartMassage)}
      </li>
    );
  }
}



export default BottomNavItem;
