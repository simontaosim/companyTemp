import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import {changePageMenuActive} from "../actions/page";



class MediaCenter extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const { dispatch, menuKeys} = this.props;
    dispatch(changePageMenuActive("media"));
  }

  render() {
    return (
      <div>
        <br/><br/>
        <h3>媒体中心</h3>
      </div>
    );
  }
}
export { MediaCenter as default }

function mapStateToProps(state) {
  return {
    menuKeys: state.page.menuKeys
   };
}

export default connect(mapStateToProps)(MediaCenter);
