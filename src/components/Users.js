import React, { Component } from "react";
import SingleUser from "./SingleUsers";
// rcc
class Users extends Component {
  // cdm
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      cart: [],
    };
    // bnd
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  //
  handleAddToCart(user) {
    const newCart = [...this.state.cart, user];
    this.setState({ cart: newCart });
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }));
  }

  render() {
    return (
      <div>
        <h2>This is User:{this.state.users.length}</h2>
        <h2>Cart:{this.state.cart.length}</h2>
        {this.state.users.map((user) => (
          <SingleUser handleAddToCart={this.handleAddToCart} key={user.id} user={user}></SingleUser>
        ))}
      </div>
    );
  }
}

export default Users;
