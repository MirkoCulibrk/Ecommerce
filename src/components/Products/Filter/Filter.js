import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import "../../style.scss";
class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false,
      items: this.props.categories,
      category: this.props.category,
      selectFilter: false
    };
  }
  dropDown = () => {
    this.setState(prevState => ({
      showList: !prevState.showList
    }));
  };
  selectFilter = index => {
    console.log(index);
    this.setState(prevState => ({
      selectFilter: !prevState.selectFilter
    }));
  };
  renderElements = () => {
    let items = this.state.items.map((item, index) => (
      <a
        onClick={() => {
          this.props.selectFilter(item, this.state.category);
          this.selectFilter(index);
        }}
      >
        <span
          className={`filter-container--items-item ${
            this.state.selectFilter ? "active" : ""
          }`}
          key={index}
        >
          {item}
        </span>
      </a>
    ));
    return items;
  };

  render() {
    return (
      <div className="filter-container">
        <div className="filter-container--title">
          <h4
            className={`text-uppercase ${this.state.showList ? "" : "active"}`}
          >
            {this.state.category}
          </h4>
          <div
            className="filter-container--arrows"
            onClick={() => this.dropDown()}
          >
            {this.state.showList ? <FaAngleDown /> : <FaAngleUp />}
          </div>
        </div>

        <div
          className="filter-container--items "
          style={{ display: this.state.showList ? "flex " : "none " }}
        >
          {this.state.items.map((item, index) => (
            <a
              onClick={() => {
                this.props.selectFilter(item, this.state.category);
                this.selectFilter(index);
              }}
            >
              <span
                className={`filter-container--items-item ${
                  this.state.selectFilter ? "active" : ""
                }`}
                key={index}
              >
                {item}
              </span>
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default Filter;
