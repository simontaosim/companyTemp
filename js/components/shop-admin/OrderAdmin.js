'use strict';

import React from 'react';
import Pagination from '../../components/shop-admin/Pagination';

class OrderAdmin extends React.Component {
  render() {
    return (
      <div>
      <h4>订单管理</h4>
      <table className="ui celled table">
        <thead>
        <tr>
        <th colSpan="3">
          <Pagination />
        </th>
        </tr>
        </thead>

        <thead>
          <tr><th>Header</th>
          <th>Header</th>
          <th>Header</th>
        </tr></thead>

        <tbody>
          <tr>
            <td>
              <div className="ui ribbon label">First</div>
            </td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
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

export { OrderAdmin as default };
