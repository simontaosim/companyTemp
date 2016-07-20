'use strict';

import React from 'react';

import ProductCard from './ProductCard';



class ProductCardList extends React.Component {

  componentDidMount() {
    $("#cartList .row").each(function(){
        $(this).after('<div class="ui section divider"></div>');
    });

  }


  render() {
    let productCardNodes = this.props.data.map(card => {
      return (
        <ProductCard key={card.key} price={card.price} discountPrice={card.discountPrice} imageUrl={card.imageUrl}>
          {card.title}
        </ProductCard>
      );
    });
    return (
      <div className="doubling eight column ui cards" style={{width: "100%"}} >
          {productCardNodes}
          <br/>
      </div>
    );
  }
}

export {ProductCardList as default };
