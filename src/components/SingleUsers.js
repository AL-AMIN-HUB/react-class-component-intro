import React, { Component } from "react";

class SingleUser extends Component {
  render() {
    return (
      <div style={{ border: "1px solid red", margin: "10px", padding: "10px" }}>
        <h2>Name: {this.props.user.name} </h2>
        <p>Email: {this.props.user.email}</p>
        <button onClick={(e) => this.props.handleAddToCart(this.props.user)}>Add to Cart</button>
      </div>
    );
  }
}

export default SingleUser;
