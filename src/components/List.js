import React, { Component } from "react";
import "../style.css";
import axios from "axios";
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  ComponentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h2>List</h2>
        {posts.length
          ? posts.map(post => (
              <div key={post.id}>
                <div> {post.userId}</div>
                <div>{post.title}</div>
                <div>{post.body}</div>
              </div>
            ))
          : null}
      </div>
    );
  }
}
export default List;
