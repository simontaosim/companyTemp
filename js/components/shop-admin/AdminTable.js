'use strict';

import React from 'react';
import Pagination from '../../components/shop-admin/Pagination';

class AdminTable extends React.Component {

  generateThead(headers) {
    let headerNodes = headers.map((header, index) => {
      return (
        <th key={index}>{header.title}</th>
      );
    });
    return headerNodes;
  }
  generateTr(recorders) {
    let recorderNodes = recorders.map((recorder, index)=>{
      return (
        <tr key={index}>
            {this.generateTd(recorder)}
        </tr>
      );
    });
    return recorderNodes;
  }

  generateTd(recorderAttrs) {
      let recorderAttrNodes = recorderAttrs.map((recorderAttr, index)=>{
        return (
          <td key={index}>
            {recorderAttr}
          </td>
        );
      })
      return recorderAttrNodes;
  }

  render() {
    return (
      <div>
      <h4>{this.props.title}</h4>
      <table className="ui celled table">
        <thead>
        <tr>
        <th colSpan="3">
          <Pagination />
        </th>
        </tr>
        </thead>

        <thead>
          <tr>
            {this.generateThead(this.props.headers)}
          </tr>
        </thead>

        <tbody>
          {this.generateTr(this.props.recorders)}
        </tbody>
        <tfoot>
          <tr><th colSpan="3">
            <Pagination />
          </th>
        </tr></tfoot>
        </table>
      </div>
    );
  }
}

export { AdminTable as default };
