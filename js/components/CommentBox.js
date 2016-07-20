'use strict';

import React from "react";
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import reqwest from "reqwest";

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
    this.getComments();
    // setInterval(() => this.getComments(), 5000);
  }

  getComments(){
    reqwest({
        url: this.props.url
      , type: 'json',
      success: comments => {
          this.setState({
            data: comments
          });
      },
      error: (xhr, status,  error) => {
        console.log(error);
      }
    });
  }

  handleCommentSubmit(comment){
      console.log(comment);
      let comments = this.state.data,
      newComments = comments.concat(comment);

      this.setState({data: newComments});
  }

  render() {
    return (
      <div className="ui comments">
        <h3>评论</h3>
        <div className="ui divider"></div>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
      </div>
    );
  }
}

export { CommentBox as default }
