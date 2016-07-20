'use strict';

import React from 'react';
import HeaderNav from './HeaderNav';

import LeftNav from './LeftNav';
import {Router, Route, hashHistory, Link} from 'react-router';
import RemoteInter from '../../components/shop-admin/RemoteInter';

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {mainCom: null};
    // RemoteInter.getLoginKey("layout");

  }

  componentDidMount() {
    $('body').css('background-color', '#FFFFFB');
    this.setActiveLink($(".item"));
    var token = '';
    // this.props.appkey = $("#app").attr("appkey");
    //若是没有判断默认进入login 界面



  }

  setActiveLink(JqueryObject) {
    JqueryObject.each(function(){
      $(this).click(function(){
        JqueryObject.removeClass('active');
        $(this).addClass('active');
      });
    });

  }

  render() {
    return (
      <div>
      <div className="container-fluid">
        <div className="ui column grid">
            <div className="three wide column" style={{textAlign: 'center' }}>
              <LeftNav />
            </div>
            <div className="ui vertical divider">
            </div>
            <div className="thirteen wide column">
              <div className="ui container">
                <HeaderNav />
                {this.props.children}
              </div>

            </div>

        </div>
      </div>
    </div>
    );
  }
}

export { Layout as default };
