'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { goBack, push } from 'react-router-redux';
import TopNav from "./TopNav";
import BackNavIcon from './BackNavIcon';

import {addNewContactAndgoBack} from "../../actions/newContact.js";

class NewContact extends React.Component {

  constructor(props) {
      super(props);
  }

  componentDidMount() {

  }
  handleSubmit(event) {
    event.preventDefault();
    const {contacts, dispatch} = this.props;
    if (this.refs.contactName.value == '') {
        alert("总得告诉我您叫啥吧！～")
        return false;
    }
    if (this.refs.mobile.value == '') {
        alert("让快递小哥可以打您电话啊～");
        return false;
    }
    if (this.refs.address.value == '') {
        alert("我到底要送到什么地方腻？");
        return false;
    }
    let contact = {
      name: this.refs.contactName.value,
      mobile: this.refs.mobile.value,
      address: this.refs.address.value
    };

    dispatch(addNewContactAndgoBack(contact));
    return false;
  }

  render() {
    const {contacts, dispatch} = this.props;
    return (
      <div>
      <TopNav
      leftClick={()=>dispatch(goBack())}
      leftItem={<BackNavIcon />}
        rightItem=""
        >
        添加联系地址
        </TopNav>
        <form style={{padding: "15px"}} onSubmit={this.handleSubmit.bind(this)}>
          <div className="row">
            <div className="input-field">
            <i className="material-icons prefix">account_circle</i>
              <input id="icon_prefix" type="text" className="validate" ref="contactName"/>
              <label htmlFor="icon_prefix">收货人姓名</label>
            </div>
            <div className="input-field">
            <i className="material-icons prefix">phone</i>
              <input id="icon_prefix" type="text" className="validate" ref="mobile"/>
              <label htmlFor="icon_prefix">手机号</label>
            </div>
            <div className="input-field">
            <i className="material-icons prefix">location_on</i>
              <input id="icon_prefix" type="text" className="validate" ref="address" />
              <label htmlFor="icon_prefix">地址</label>
            </div>
            <div className="input-field" style={{width: "100%"}}>
              <button  style={{width: "100%", display: "block"}}
              className="waves-effect waves-yellow btn red lighten-1 small" type="submit" name="action">
                  确认并添加
              </button>
            </div>
          </div>
        </form>

        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentOrder: state.orderStore.contacts
   };
}


export default connect(mapStateToProps)(NewContact);
