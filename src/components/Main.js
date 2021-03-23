import React, { Component } from "react";
import Banner from "./Banner/Banner";
import Products from "./Products/Products";
export default class Main extends Component {
  render() {
    return (
      <React.Fragment>

        <Banner></Banner>
        <Products></Products>
      </React.Fragment>
    );
  }
}
