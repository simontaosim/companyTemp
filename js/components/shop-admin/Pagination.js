'use strict';

import React from 'react';

class Pagination extends React.Component {

  handlePageSubmit(event) {
    event.preventDefault();
    this.props.toPage(this.refs.page.value);
  }

  render() {

    let prevPage = Number(this.props.page)-1 > 0 ? (Number(this.props.page)-1) : 1;
    return (
      <div>
      <div className="ui right floated pagination menu">
        <a  onClick={()=>this.props.toPage(1)} className="item">回首页</a>
        <a  onClick={()=>this.props.toPage(prevPage)} className="icon item">
          <i className="left chevron icon"></i>
        </a>
        <a  onClick={()=>this.props.toPage(Number(this.props.page)-2)} className="item" style={{display: Number(this.props.page)-2 >0 ? "flex" : "none"}}>
        {Number(this.props.page)-2 >=0 ? Number(this.props.page)-2 : 0 }
        </a>
        <a  onClick={()=>this.props.toPage(Number(this.props.page)-1)} className="item" style={{display: Number(this.props.page)-1 >0 ? "flex" : "none"}}>
        {Number(this.props.page)-1 >=0 ? Number(this.props.page)-1 : 0 }
        </a>
        <a className="item active">{Number(this.props.page)}</a>
        <a onClick={()=>this.props.toPage(Number(this.props.page)+1)} className="item">{Number(this.props.page)+1}</a>
        <a  onClick={()=>this.props.toPage(Number(this.props.page)+2)} className="item">{Number(this.props.page)+2}</a>
        <a  onClick={()=>this.props.toPage(Number(this.props.page)+3)} className="item">{Number(this.props.page)+3}</a>
        <a  onClick={()=>this.props.toPage(Number(this.props.page)+7)} className="item">...</a>
        <a  onClick={()=>this.props.toPage(Number(this.props.page)+10)} className="item">{Number(this.props.page)+10}</a>
        <a  onClick={()=>this.props.toPage(Number(this.props.page)+11)} className="item">{Number(this.props.page)+11}</a>
        <a  onClick={()=>this.props.toPage(Number(this.props.page)+12)} className="item">{Number(this.props.page)+12}</a>
        <a  onClick={()=>this.props.toPage(Number(this.props.page)+1)} className="icon item">
          <i className="right chevron icon"></i>
        </a>
        <form className="item" onSubmit={this.handlePageSubmit.bind(this)}>
          <input type="number" style={{width: "100px"}} ref="page" placeholder="跳至"/><input type="submit" value="go"/>
        </form>
      </div>

      </div>
    );
  }
}

export { Pagination as default };
