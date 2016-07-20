'use strict';

import React from 'react';
import PicCarousel from './PicCarousel'
import MobileTopNavBar from './MobileTopNavBar';
import PcTopNavBar from './PcTopNavBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ProductCardList from './ProductCardList';
injectTapEventPlugin();


class Home extends React.Component {

  constructor(props) {
      super(props);
      let hot = [
          {key: 23, title: "老亮头牌高级牛皮汽车坐垫", price: "199", discountPrice: "299", imageUrl: "/images/product3.png"},
          {key: 24, title: "特级浓缩玻璃水,6瓶装", price: "120", discountPrice: "48", imageUrl: "/images/product1.png"}
      ];
      this.state = {
        hot: hot,
        limitHot: {

        },
        best: {

        }
    };
  }

  componentDidMount() {
    $("#mobileBottomNav .item").each(function(){
      $(this).removeClass("active")
    })
    $("#pcTopNav .item").each(function(){
      $(this).removeClass("active")
    })
    $("#mobileBottomNav .item:eq(0)").addClass("active");
    $("#pcTopNav .item:eq(0)").addClass("active");

  }
  render() {
    return (
      <div id="homeContent" className="container-fluid" style={{width: "95%"}}>
      <PcTopNavBar />
      <MobileTopNavBar>老马商城</MobileTopNavBar>
      <br/><br/>
        <PicCarousel /><br/>
        <div className="ui centered container-fluid" style={{position: "relative", left: "3%",top: "-45px"}}>
               <div className="ui horizontal divider">火爆热卖</div>
               <br/>
              <ProductCardList data={this.state.hot}/>
              {/*<div className="doubling eight column row ui cards" >
                <div className="column">1</div>
                <div className="column">2</div>
                <div className="column">3</div>
                <div className="column">4</div>

              </div>
              <div className="stackable six column row">
                <div className="column">1</div>
                <div className="column">2</div>
                <div className="column">3</div>
                <div className="column">4</div>
              </div>*/}

        </div>
      </div>
    );
  }
}

export { Home as default };
