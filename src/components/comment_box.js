import React, {Component} from 'react';


class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {comment: ''};
  }

  handleChange(event){
      this.setState({comment: event.target.value});
  }

  render() {
    return (
      <div className="comment-box">
      <textarea value={this.state.comment } onChange={this.handleChange.bind(this)} >
      </textarea>
      <button>Submit comment</button>
      </div>
      );
  }
}

export default CommentBox;
