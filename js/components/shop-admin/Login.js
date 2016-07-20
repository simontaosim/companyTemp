'use strict';

import React from 'react';
import {Router, Route, hashHistory, Link} from 'react-router';
import RemoteInter from '../../components/shop-admin/RemoteInter';

class Login extends React.Component {
  componentDidMount() {
    $('body').css('background-color', '#DADADA');
    RemoteInter.getLoginKey("login");
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("提交表单");
    let email = this.refs.email.value,
       password = this.refs.password.value;
    if (email == '') {
      alert("请填写邮箱");
      return
    }
    if (password == '') {
      alert("密码不能为空");
      return
    }
    RemoteInter.login(email, password);
    return false;

  }
  render() {
    return (
      <div style={{ backgroundColor: '#DADADA' }}>
      <div className="ui middle aligned center aligned grid" style={{ height: '100%' }}>
        <div className="column" style={{maxWidth: '450px'}}>
          <h2 className="ui teal image header">

            <div className="content" style={{ marginTop: '5px' }}>
              可思哥管理系统
            </div>
          </h2>
          <form className="ui large form" onSubmit={this.handleSubmit.bind(this)}>
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input type="text" name="email" placeholder="电子邮箱" ref="email" />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input type="password" name="password" placeholder="密码" ref="password" />
                </div>
              </div>
              <button type="submit" className="ui fluid large teal submit button">登录</button>
            </div>

            <div className="ui error message"></div>

          </form>

          <div className="ui message">
            CopyRight@Simon;
          </div>
        </div>
      </div>
      </div>

    );
  }
}

export { Login as default };
