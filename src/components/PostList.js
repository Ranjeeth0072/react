import React, { Component } from "react";
import "../style.css";
import axios from "axios";
class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errorMsg: ""
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
        this.setState({ errorMsg: "Error reter" });
      });
  }
  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <h2> List Of Post</h2>
        {posts.length
          ? posts.map(post => (
              <div key={post.id}>
                <div> {post.userId}</div>
                <div>{post.title}</div>
                <div>{post.body}</div>
              </div>
            ))
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}
export default PostList;
