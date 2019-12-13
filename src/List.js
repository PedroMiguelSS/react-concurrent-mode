import React, { Component } from "react";
import comments from "./utils/comments";
import Comment from "./Comment";

class List extends Component {
  state = {
    filteredContent: ""
  };
  handleInputChange = event => {
    this.setState({
      filteredContent: event.target.value
    });
  };
  getFilteredComments() {
    const { filteredContent } = this.state;
    return filteredContent
      ? comments.filter(comment => {
          return comment.title.includes(filteredContent);
        })
      : comments;
  }
  render() {
    return (
      <div>
        <input
          onChange={this.handleInputChange}
          value={this.state.filteredContent}
          placeholder="Filter the comments by content"
        />
        {this.getFilteredComments().map(comment => (
          <Comment key={comment.id} url={comment.url} title={comment.title} />
        ))}
      </div>
    );
  }
}

export default List;
