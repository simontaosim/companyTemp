'use strict';

import React from 'react';
import { hashHistory } from 'react-router';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import RemoteInter from '../../components/shop-admin/RemoteInter';

class NewImage extends React.Component {

  constructor(props) {
      super(props);
      RemoteInter.getLoginKey("NewImage");
  }

  componentDidMount() {
    const {dispatch} = this.props;
    $('#newImageForm').ajaxForm({
      delegation: true,
      method: "POST",
      statusCode: {
        200: function(data){
          let dataObj = $.parseJSON(data);
          if (dataObj.path != undefined) {
              $("#imageShow").find("img").attr("src", dataObj.path.url);
          }
          if (dataObj.name != undefined) {
            

            dispatch(push("/images/loader"));
          }
        }
      }
      });
  }
  handleImageFileChange(event) {
    $('#newImageForm').submit();
  }
  render() {
    return (
      <div>
      <form id="newImageForm" action="/api/images/create" encType="multipart/form-data">
        <div className="field">
          <div className="ui two column grid" style={{textAlign: 'center' }}>
              <div className="column" id="imageShow">
                <img src="/images/defaultPic.jpg" width="100%"/>
              </div>
              <div className="column">
                <label>请选择图片:</label><br/><br/><br/>
                <input onChange={this.handleImageFileChange.bind(this)} type="file" name="imageFile" placeholder="上图"  single/>
              </div>
          </div>
        </div>
        <div className="field">
          <div className="ui two column grid" style={{textAlign: 'center' }}>
            <div className="column"><label>图片名称</label></div>
            <div className="column">
            <input  type="text" name="imageName" placeholder="输入你的图片名称"  />
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
    image: state.ImageReducer.image

   };
}


export default connect(mapStateToProps)(NewImage);
