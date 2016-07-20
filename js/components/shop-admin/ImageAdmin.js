'use strict';

import React from 'react';
import { Link } from 'react-router';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import RemoteInter from '../../components/shop-admin/RemoteInter';

import Pagination from '../../components/shop-admin/Pagination';
import {getImages, updateImagesByRemoteDelete, getRemoteImageAndShow, getRemoteImageAndEdit}
from "../../actions/shop-admin/images.js";


class ImageAdmin extends React.Component {

  constructor (props) {
    super(props);
    this.state = {};
    RemoteInter.getLoginKey("ImageAdmin");
  }

  componentDidMount() {


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


  handleRemoveClick(event){
    event.preventDefault();
    const { dispatch } = this.props;
    let index = event.target.attributes["data-key"].value;
    $('#imageRemoveConfirm')
      .modal({
        closable  : false,
        onDeny    : function(){
        },
        onApprove : function() {
          dispatch(updateImagesByRemoteDelete(index));
        }
      }).modal('show');

  }
  handleViewImage(event){
    const { dispatch, dealingImage } = this.props;
    let index = event.target.attributes["data-key"].value;
    dispatch(getRemoteImageAndShow(index));
    $("#imageShowModal").modal({
      onShow: function(){
        dispatch(getRemoteImageAndShow(index));
      }
    }).modal("show");

    $("#imageTitle").html(this.props.dealingImage.name);
    $("#imagePath").attr("src", this.props.dealingImage.url.url);

  }
  handleEditImage(event){
    const { dispatch } = this.props;
    let index = event.target.attributes["data-key"].value;
    dispatch(getRemoteImageAndEdit(index));
  }

  render() {

    const { dispatch, images, page } = this.props;

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
            <a onClick={this.handleRemoveClick.bind(this)} data-key={index} className="circular negative ui icon button">
            <i  data-key={index} className="remove icon"></i>
            </a>
            <a  onClick={this.handleViewImage.bind(this)} data-key={index} className="circular ui icon button">
            <i  data-key={index} className="unhide icon"></i>
            </a>
            <a onClick={this.handleEditImage.bind(this)} data-key={index} className="circular ui icon button">
            <i  data-key={index} className="edit icon"></i>
            </a>
            </td>
          </tr>
        );
      });

    }


    return (
      <div>

      <h3 style={{float: "left", marginRight: "20px", paddingTop: "10px"}}>图片列表</h3>
      <div><a onClick={()=>dispatch(push("images/new"))} className="ui button primary">添加图片</a></div>
      <div>
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
        {/*删除对话框*/}
        <div id="imageRemoveConfirm" className="ui basic modal">
          <div className="ui icon header">
          <i className="remove circle icon"></i>
          删除图片警告</div>
          <div className="content">
            <p style={{textAlign: "center"}}>是否确认要删除此项？</p>
          </div>
          <div className="actions">
            <div className="ui green ok inverted button">
            <i className="checkmark icon"></i>
            确认</div>
            <div className="ui red basic cancel inverted button">
            <i className="remove icon"></i>
            取消</div>
          </div>
        </div>
        {/*显示框*/}
        <div id="imageShowModal" className="ui modal">
          <div className="ui header" id="imageTitle">

          </div>
          <div className="content">
            <div style={{textAlign: "center"}}>
              <img id="imagePath" src="/images/defaultPic.jpg" width="100%" />
            </div>
          </div>
          <div className="actions">
            <div className="ui green ok inverted button">
            <i className="checkmark icon"></i>
            已阅</div>
          </div>
        </div>
        <br/><br/><br/>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.Ima geReducer.images,
    page: state.ImageReducer.page,
    dealingImage: state.ImageReducer.dealingImage

   };
}


export default connect(mapStateToProps)(ImageAdmin);
