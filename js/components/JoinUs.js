import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import {changePageMenuActive} from "../actions/page";



class JoinUs extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const { dispatch, menuKeys} = this.props;
    dispatch(changePageMenuActive("join"));
  }

  render() {
    return (
      <div>
        <br/><br/>
        <h3>加入我们</h3>
      </div>
    );
  }
}
export { JoinUs as default }

function mapStateToProps(state) {
  return {
    menuKeys: state.page.menuKeys
   };
}

export default connect(mapStateToProps)(JoinUs);
