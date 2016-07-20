'use strict';

import React from 'react';
import { hashHistory } from 'react-router';
import { push } from 'react-router-redux';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import RemoteInter from '../../components/shop-admin/RemoteInter';

import {getRemoteImageAndEdit}
from "../../actions/shop-admin/images.js";

class EditImage extends React.Component {

  constructor(props) {
      super(props);
      RemoteInter.getLoginKey("EditImage");
      this.state = {}
  }

  componentDidMount() {
    const {dispatch, image} = this.props;
    this.refs.imageName.value = this.props.image.name;
    $('#editImageForm').ajaxForm({
      delegation: true,
      method: "POST",
      statusCode: {
        200: function(data){
          let dataObj = $.parseJSON(data);
          if (dataObj.path != undefined) {
              $("#imageShowEdit").find("img").attr("src", dataObj.path.url);
          }
          if (dataObj.name != undefined) {
            console.log(dataObj.name);
            dispatch(push("/images/loader"));
          }
        }
      }
      });
  }
  handleImageFileChange(event) {
    const {image} = this.props;
    $('#editImageForm').attr("action","/api/images/temp");
    $('#editImageForm').submit();
    $('#editImageForm').attr("action","/api/images/update/"+this.props.image.id);
  }

  handleTextChange(event){

  }

  render() {
    const { dispatch, image } = this.props;
    return (
      <div>
      <form id="editImageForm" action={"/api/images/update/"+this.props.image.id} encType="multipart/form-data">
        <div className="field">
          <div className="ui two column grid" style={{textAlign: 'center' }}>
              <div className="column" id="imageShowEdit">
                <img src={this.props.image.url.url} width="100%"/>
              </div>
              <div className="column">
                <label>请选择图片:</label><br/><br/><br/>
                <input  onChange={this.handleImageFileChange.bind(this)} type="file" name="imageFile" placeholder="上图"  single/>
              </div>
          </div>
        </div>
        <div className="field">
          <div className="ui two column grid" style={{textAlign: 'center' }}>
            <div className="column"><label>图片名称</label></div>
            <div className="column">
            <input ref="imageName" onChange={this.handleTextChange.bind(this)} id="imageNameEdit"   type="text" name="imageName" placeholder="输入你的图片名称"  />
            </div>
          </div>
        </div>
        <div className="field" style={{textAlign: 'center' }}>
            <input type="submit" className="ui primary button" value="提交" />
        </div>

      </form>
      <br/><br/><br/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    image: state.ImageReducer.dealingImage

   };
}


export default connect(mapStateToProps)(EditImage);
