import React, { Component } from "react";
import data from "../../fakeData.json";
import ProductList from "./Product/ProductList";
import Filter from "./Filter/Filter";
import Sort from "./Sorting/Sort.js";
import PriceSlider from "./Slider/PriceSlider";
import "../style.scss";
import LayoutIcon from "./ShowLayout/LayoutIcons";
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products,
      sort: "",
      sortedItem: "",
      filter: "",
      showLayout: "grid"
    };
  }
  setLayout = type => {
    this.setState({
      showLayout: type
    });
  };
  sortProducts = event => {
    const sort = event.target.value;
    this.setState(prevState => ({
      sort: sort,
      //first making cloned products and sort it
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price < b.price
              ? -1
              : 1
            : sort === "highest"
            ? a.price > b.price
              ? -1
              : 1
            : a.id < b.id
            ? 1
            : -1
        )
    }));
  };
  selectFilter = (item, category) => {
    if (category === "Colors") {
      this.setState({
        filter: item,
        products: data.products.filter(
          product => product.avalableColors.indexOf(item.toLowerCase()) >= 0
        )
      });
    }
  };
  render() {
    return (
      <section className="container d-flex" id="products">
        {/* filters and sort */}
        <div className="col-lg-3 sorting">
          <h1 className="text-uppercase">Our Products</h1>
          <Filter
            category={"Headphones"}
            categories={["wired", "wireless"]}
            selectFilter={this.selectFilter}
          />
          <Filter
            category={"Colors"}
            categories={["Black", "Yellow", "Red"]}
            selectFilter={this.selectFilter}
          />
        </div>
        {/* products */}
        <div className="col-lg-9 items d-flex flex-lg-wrap ">
          <div className="row justify-content-between">
            <Sort sortProducts={this.sortProducts} sort={this.state.sort} />
            <div className="showLayout-container d-flex">
              <LayoutIcon setLayout={this.setLayout} />
            </div>
          </div>
          <div className="row">
            <ProductList
              data={this.state.products}
              showLayout={this.state.showLayout}
            />
          </div>
        </div>
      </section>
    );
  }
}
