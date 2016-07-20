'use strict';

import React from 'react';
import { hashHistory } from 'react-router';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import {updateDealingProduct,
  newProductStep,
  setCover, removeProductImage, updateProductImagesByNewImage} from "../../actions/shop-admin/products.js";
import {getImages, getRemoteImageAndShow}
from "../../actions/shop-admin/images.js";
import Pagination from '../../components/shop-admin/Pagination';

class NewProductStepTwo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: []};
    // setInterval(() => this.getComments(), 5000);
  }

  componentDidMount() {
    const {dispatch, newProduct} = this.props;
    $('.ui.selection.dropdown').dropdown();

    $('#uploadImage').ajaxForm({
      delegation: true,
      method: "POST",
      statusCode: {
        200: function(data){
          let dataObj = $.parseJSON(data);
          dispatch(updateProductImagesByNewImage(dataObj));

        }
      }
      });

  }
  isEmpty() {
    return (
      <tr>
        <td  colSpan="4" style={{textAlign: "center"}}>
        <h3>暂无找到数据</h3>
        </td>
      </tr>
    );
  }
  componentDidUpdate() {
      $('.ui.dropdown').dropdown('refresh');
  }

  handleCancelBtn(event){
    const {dispatch} = this.props;
    dispatch(push("products/loader"));
  }

  handleSubmit(event) {
    event.preventDefault();
    const {dispatch} = this.props;
    let productNew = {
      title: this.refs.title.value,
      priceInt: Number(this.refs.priceInt.value),
      priceFloat: Number(this.refs.priceFloat.value),
      price: Number(this.refs.priceInt.value)+Math.round(this.refs.priceFloat.value)/100,
      storeNumber: Number(this.refs.storeNumber.value),
      advanceSaying: this.refs.advanceSaying.value,
      briefDecription: this.refs.briefDecription.value
    };

    dispatch(updateDealingProduct(productNew));



  }

  handlePriceIntChange(event) {
    if (event.target.value < 0) {
      event.target.value = 0;
    }
  }

  handlePriceFloatChange(event){
    if (event.target.value < 0) {
      event.target.value = 0;
    }
    if (event.target.value > 99) {
      event.target.value = 99;
    }
  }

  handleImageFileChange(event) {
    $('#uploadImage').submit();
  }


  showImages(images){
    const {dispatch} = this.props;
    if (images.length > 0 ) {

        let imageNodes = images.map((image, index)=>{
          return (
            <div key={index} className="card" >
              <div className="image">
                <img src={image.url.url} />
              </div>
              <div className="content">
                <p>{image.name}</p>{this.props.newProduct.cover == index ? "(封面)" : ""}
              </div>
              <div className="extra content">
                <div className="ui two buttons">
                  <div onClick={()=>dispatch(setCover(index))} className="ui basic green button">设为封面</div>
                  <div onClick={()=>dispatch(removeProductImage(index))} className="ui basic red button">删除</div>
                </div>
              </div>
            </div>
          );
        });
        return imageNodes;

    }else{
      return (
        <div>
          产品图片显示区
        </div>
      );
    }
  }

  render() {

    const {dispatch, newProduct, images, page} = this.props;


    let imageNodes = null;
    if (this.props.images.length == 0) {
      imageNodes = this.isEmpty();
    }else{
      imageNodes = this.props.images.map((image, index)=> {
        return (
          <tr key={index}>
            <td>
              <div className={index==0 ? "ui ribbon label" : ""}>{image.id}</div>
            </td>
            <td>{image.name}</td>
            <td><img src={image.url.thumb.url} width="70%"/></td>
            <td>
            <a data-key={index} className="circular ui icon button">
              使用此图片
            </a>
            </td>
          </tr>
        );
      });

    }


    return (
      <div>
      <h4>新货步骤2</h4>
      <div className="ui divider"></div>
        <h5>已经确认的基本商品信息</h5>
        <div className="ui grid container segment">
          <div className="doubling two column row">
              <div className="column" style={{width: "32% !important"}}>商品名：</div>
              <div className="column" style={{width: "32% !important", overflowWrap: "break-word", wordWrap: "break-word"}}>
              {this.props.newProduct.title}</div>
          </div>
          <div className="doubling two column row">
              <div className="column"  style={{width: "32% !important"}}>价格：</div>
              <div className="column" style={{width: "32% !important", overflowWrap: "break-word", wordWrap: "break-word"}}>
              ¥{this.props.newProduct.price}</div>
          </div>
          <div className="doubling two column row">
              <div className="column"  style={{width: "32% !important"}}>库存：</div>
              <div className="column" style={{width: "32% !important",overflowWrap: "break-word", wordWrap: "break-word"}}>
              {this.props.newProduct.storeNumber}</div>
          </div>
          <div className="doubling two column row">
              <div className="column"  style={{width: "32% !important"}}>简介：</div>
              <div className="column" style={{width: "32% !important",overflowWrap: "break-word", wordWrap: "break-word"}}>
              {this.props.newProduct.briefDecription}</div>
          </div>
          <div className="doubling two column row">
              <div className="column"  style={{width: "32% !important"}}>基本特色：</div>
              <div className="column" style={{width: "32% !important",overflowWrap: "break-word", wordWrap: "break-word"}}>
              {this.props.newProduct.advanceSaying}</div>
          </div>

        </div>
      <div className="ui divider"></div>
        <h3>为产品上传图片(最多12张)</h3>
      <div className="ui divider"></div>
      <div className="field">
        <div className="ui two column grid" style={{textAlign: 'center' }}>
          <div className="column">
            <br/><br/>
            <button className="ui primary button">从网站图库中选择</button>
          </div>
          <div className="ui vertical divider"
          style={{height: "40px", position: "relative", left: "-31px", top: "38px", color: "blown"
          }}>
            或者
          </div>
          <div className="column" style={{width: "40%"}}>
            <h5 style={{textAlign: "left"}}>从本地上传</h5>
            <form id="uploadImage" action="api/images/create">
            <input type="hidden" value={this.props.newProduct.title} name="imageName"/><br/>
            <input type="file" className="ui primary button"  onChange={this.handleImageFileChange.bind(this)} name="imageFile" placeholder="商品图片" />
            </form>
          </div>
        </div>
      </div><br/><br/>
      <div className="ui segment cards" style={{clear: "both", display: "flex"}}>
        {this.showImages(this.props.newProduct.images)}
      </div>
      <div className="ui divider" style={{clear: "both"}}></div>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <div className="ui form">
        <div className="ui four column grid" style={{textAlign: 'center' }}>
          <div className="column">
            <button onClick={this.handleCancelBtn.bind(this)} className="ui red cancel inverted button" type="button">取消</button>
          </div>
          <div className="column">
            <a onClick={()=>dispatch(push("products/new"))} className="ui green ok inverted button">上一步</a>
          </div>
          <div className="column">
            ［步骤2］
          </div>
          <div className="column">
            <button className="ui green ok inverted button" type="submit">下一步</button>
          </div>
        </div>

      </div>
      </form>
      <br/><br/><br/><br/><br/><br/>
      <div className="ui modal">
        <div className="header">Header</div>
        <div className="content">
          <table className="ui celled table">
            <thead>
            <tr>
            <th colSpan="4">
              <Pagination toPage={(page)=>dispatch(getImages(page))} page={this.props.page} />
            </th>
            </tr>
            </thead>

            <thead>
              <tr><th>编号</th>
              <th>图片名称</th>
              <th width="150px">缩略图</th>
              <th width="156px">操作</th>
            </tr></thead>

            <tbody>
              {imageNodes}
            </tbody>
            <tfoot>
              <tr><th colSpan="4">
                <Pagination toPage={(page)=>dispatch(getImages(page))}  page={this.props.page}/>
              </th>
            </tr></tfoot>
            </table>
        </div>
        <div className="actions">
          <div className="ui cancel button">关闭</div>
        </div>
      </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    newProduct: state.ProductReducer.dealingProduct,
    page: state.ImageReducer.page,
    images: state.ImageReducer.images

   };
}


export default connect(mapStateToProps)(NewProductStepTwo);
