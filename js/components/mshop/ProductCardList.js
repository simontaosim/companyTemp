'use strict';

import React from 'react';
import ProductCard from "./ProductCard"

class ProductCardList extends React.Component {

  constructor(props) {
      super(props);
  }

  componentDidMount() {
    $('.materialboxed').materialbox();
  }
  render() {
    let productCardNodes = this.props.products.map((product, index) => {
      return (
        <ProductCard
        key={index}
        addProductToCart={()=> this.props.addProductToCart(index)}
        dataKey={product.id}
        title={product.title}
        price={product.price}
        imageUrl={product.imageUrl}
        priceType={product.priceType}
        briefDecription={product.briefDecription}
        generateNewOrderByFastAndPushPath={()=>this.props.generateNewOrderByFastAndPushPath(index)}
         />
      );
    });
    return (
      <div>
          {productCardNodes}
      </div>
    );
  }
}

export { ProductCardList as default };
