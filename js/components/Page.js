'use strict';

import React from "react";
import "../../css/page.css";
import "../../css/normalize.css";


import { Row, Col, Menu, Icon, Affix } from 'antd';
import { Link } from 'react-router';

import { connect } from 'react-redux';

class Page extends React.Component {

  constructor (props) {
    super(props);
  }

  affixedOnChangeHandle(isFixed){
      if (isFixed) {
        $(".page-nav-item a").css("color", "#373C38");
        $(".ant-affix").css("z-index", "9000");
      }else{
        $(".page-nav-item a").css("color", "#FCFAF2");
      }
  }


  render (){
    const { dispatch, menuKeys} = this.props;

    // 初始化导航栏链接字体的样式
    let initNavColor={
      position: 'relative',
      top: '16px',
      textDecoration: 'none',
      color: '#FCFAF2'
    }

    return (
      <div>
        <Affix onChange={affixed => {this.affixedOnChangeHandle(affixed);}}>
          <Row  id="pageHeader">
            <Col span={6}>
            <Menu mode="horizontal" selectedKeys={[this.props.menuKeys]}>
            {/*这里的这个props属性用于在加载不同page的时候，让某个导航栏项处于激活状态*/}
              <Menu.Item  className="page-nav-logo"><Link to="/" style={{color: "#2EA9DF"}}>公司logo</Link></Menu.Item>
            </Menu>
            </Col>
            <Col  span={17}>
                <Menu mode="horizontal"  selectedKeys={[this.props.menuKeys]}>
                {/*菜单项倒序写，然后在page-nav-item的样式强制向右浮动，即可以把菜单项整体靠右边*/}
                  <Menu.Item key="media" className="page-nav-item"><Link to="media_center" style={initNavColor}>媒体中心</Link></Menu.Item>
                  <Menu.Item key="contact" className="page-nav-item"><Link to="contact_us"  style={initNavColor}>联系我们</Link></Menu.Item>
                  <Menu.Item key="join" className="page-nav-item"><Link to="join_us"  style={initNavColor}>加入我们</Link></Menu.Item>
                  <Menu.Item  key="about" className="page-nav-item"><Link to="about_us"  style={initNavColor}>关于我们</Link></Menu.Item>
                  <Menu.Item  key="products" className="page-nav-item"><Link to="products_page"  style={initNavColor}>产品展示</Link></Menu.Item>
                  <Menu.Item key="news"  className="page-nav-item"><Link to="company_news"  style={initNavColor}>公司动态</Link></Menu.Item>
                  <Menu.Item key="home"  className="page-nav-item"><Link to="/"  style={initNavColor}>首页</Link></Menu.Item>
                </Menu>
            </Col>
            <Col span={1}>
              <Menu mode="horizontal" selectedKeys={[this.props.menuKeys]}>
                <Menu.Item  className="page-nav-logo">&nbsp;</Menu.Item>
              </Menu>
            </Col>
          </Row>

        </Affix>
        <div className="page-header-back" id="pageBack">
          {/*主要用来填充Affix的背景*/}
        </div>
        <Affix offsetTop={75} className="page-body">
          {this.props.children}
        </Affix>
        <div className="page-footer">
          <Row>
            <Col span={6}>页脚第一栏</Col>
            <Col span={6}>页脚第二栏</Col>
            <Col span={6}>页脚第三栏</Col>
            <Col span={6}>页脚第四栏</Col>
          </Row>
        </div>
      </div>


    );
  }
}



function mapStateToProps(state) {
  return {
    menuKeys: state.page.menuKeys
   };
}

export default connect(mapStateToProps)(Page);
