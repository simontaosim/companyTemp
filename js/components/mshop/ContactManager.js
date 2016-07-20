'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { goBack, push } from 'react-router-redux';
import { Link } from 'react-router';
import TopNav from "./TopNav";
import BackNavIcon from './BackNavIcon';

import {useContactInCurrentOrderAndPush} from "../../actions/contactManager"

class ContactManager extends React.Component {

  constructor(props) {
      super(props);
  }

  componentDidMount() {

  }

  showContacts(contacts) {
    let ContactBtn = {
      paddingLeft: "5px",
      paddingRight: "5px",
      fontSize: "11px",
      width: "100%"

    };
    const {dispatch} = this.props;
    if (contacts.length > 0) {
      let contactsNodes = this.props.contacts.map((contact, index) => {

        return (
            <li key={index} className="collection-item row" style={{width: "100%", padding: "3px", overflowWrap: "break-word", wordWrap: "break-word"}}>
              <div className="col s3"  style={{overflowWrap: "break-word", wordWrap: "break-word"}}>
                  <p>地址{index+1}</p>
              </div>
              <div className="col s5" style={{width: "41.5%", overflowWrap: "break-word", wordWrap: "break-word"}}>
                  <p className="flow-text" style={{width: "95%"}}>姓名:</p>
                  {contact.name}
                  <p className="flow-text" style={{width: "95%"}}>手机:</p>
                  {contact.mobile}
                  <p className="flow-text" style={{width: "95%"}}>地址:</p>
                  {contact.address}
              </div>
              <div className="col s4" style={{overflowWrap: "break-wrap", wordWrap: "break-wrap"}} >
                  <p onClick={() => dispatch(useContactInCurrentOrderAndPush(contact))}
                  style={ContactBtn}
                  className="btn waves-effect waves-yellow grey lighten-3">
                    <span className="green-text text-darken-5">使用此地址配送</span>
                  </p>
                  <p style={ContactBtn} className="btn waves-effect waves-yellow grey lighten-3">
                    <span className="grey-text text-darken-5">设为默认</span>
                  </p>
                  <p style={ContactBtn} className="btn waves-effect waves-yellow red">
                    <span className="grey-text text-lighten-5">删除</span>
                  </p>
              </div>
            </li>
        );
      });
      return contactsNodes;
    }
    return (
      <div className="grey lighten-5" style={{padding: "10px", textAlign: "center"}}>
        您尚没有联系方式以及地址
        <p>
          <Link to="user/contacts/new" className="waves-effect waves-yellow btn red small">
          去添加一个～
          </Link>
        </p>

      </div>
    );

  }

  render() {

    const {contacts, dispatch} = this.props;

    return (
      <div>
      <TopNav
      leftClick={()=>dispatch(goBack())}
      leftItem={<BackNavIcon />}
        rightItem={
          <Link to="user/contacts/new" style={{fontSize: "12px"}}>添加地址</Link>
        }
        >
        联系地址管理
        </TopNav>
        <ul className="collection">
          {this.showContacts(this.props.contacts)}
        </ul>

        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.orderStore.contacts
   };
}


export default connect(mapStateToProps)(ContactManager);
