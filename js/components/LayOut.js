'use strict';

import React from "react";
import AppBar from 'material-ui/lib/app-bar';
import MenuItem from 'material-ui/lib/menus/menu-item';
import LeftNav from 'material-ui/lib/left-nav';
import RaisedButton from 'material-ui/lib/raised-button';
import injectTapEventPlugin from 'react-tap-event-plugin';
import IconButton from 'material-ui/lib/icon-button';

import FontIcon from 'material-ui/lib/font-icon';
import Colors from 'material-ui/lib/styles/colors';
import $ from 'jquery'




class LayOut extends React.Component {

  constructor (props) {
    super(props);
    this.state = {open: false};
  }

  // handleToggle (event) {
  //   event.preventDefault();
  //   console.log(123);
  //   this.setState({open: !this.state.open});
  // }
  handleToggle () {
    this.setState({open: !this.state.open});
    $('body').css("background-color", "red");
  }



  render (){
    return (
      <div style={{ height: window.screen.height, position: 'relative', bottom: '0px' }}>
        <div className="ez-wr" >
          <div className="ez-box" >
          <AppBar
          title="可思哥管理后台"
          iconElementLeft={<IconButton style={{ width: '90px', height: '90px', fontSize: '48px' }} onTouchTap={this.handleToggle.bind(this)}>
                            <FontIcon className="material-icons md-36" style={{ fontSize: '48px' }}>menu</FontIcon>
                          </IconButton>}
          style={{ height: window.screen.height/6.2}}
          titleStyle = {{ paddingTop: '1em', paddingBottom: '1em', fontSize: '4.5em', fontWeight: 'bolder'}}
          />

          <LeftNav
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
          >
             <MenuItem>Menu Item</MenuItem>
             <MenuItem>Menu Item 2</MenuItem>
         </LeftNav>
          </div>
            <div className="ez-wr">
              <div className="ez-fl  ez-negmx ez-33">
                <br/>
                <div className="ez-box">
                <RaisedButton
               label="添加商品"
               onTouchTap={this.handleToggle.bind(this)}
               />
                </div>
              </div>

              <div className="ez-fl ez-negmr ez-33">
                <div className="ez-box">
                    <br/>
                    <div className="ez-box">
                    <RaisedButton
                   label="添加文章"
                   onTouchTap={this.handleToggle.bind(this)}
                   />
                    </div>
                </div>
              </div>
              <div className="ez-last ez-oh">
                <div className="ez-box">
                    <br/>
                    <div className="ez-box">
                    <RaisedButton
                   label="管理订单"
                   onTouchTap={this.handleToggle.bind(this)}
                   />
                    </div>
                </div>
              </div>
          <div className="ez-box" style={{ position: 'fixed', bottom: '2px' }} >.footer.</div>
        </div>
        </div>
      </div>

    );
  }
}
injectTapEventPlugin();

export { LayOut as default }
