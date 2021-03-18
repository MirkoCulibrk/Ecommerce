import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
class SelectOption extends React.Component {
  state = {
    items: this.props.items || [],
    selectedItem: this.props.items[0],
    showItems: false,
    type: this.props.type
  };
  dropDown = () => {
    console.log(this.state.items, this.state.type);
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }));
  };
  selectItem = item => {
    this.setState({
      showItems: false,
      selectItem: item
    });
  };
  renderELement() {
    let options;
    if (this.state.type === "numbers") {
      options = this.state.items.map(item => {
        console.log(this.state);
        return (
          <div
            key={item}
            onClick={() => this.selectItem(item)}
            className={`option text-uppercase ${
              this.state.selectedItem === item ? "selected" : ""
            }`}
          >
            {item}
          </div>
        );
      });
    } else if (this.state.type === "colors") {
      options = this.state.items.map(item => {
        return (
          <div
            key={item}
            onClick={() => this.selectItem(item)}
            className={`option text-uppercase  ${
              this.state.selectedItem === item ? "selected" : ""
            }`}
            style={{ position: "relative", paddingLeft: "37px" }}
          >
            <span
              className="colorCircle"
              style={{ backgroundColor: item, marginTop: "2px" }}
            />
            {item}
          </div>
        );
      });
    }
    console.log(options);
    return options;
  }

  render() {
    return (
      <React.Fragment>
        <div className="select-box">
          <div className="select-box--container">
            <div
              style={{
                display: this.state.type === "colors" ? "flex" : "none"
              }}
            >
              <span
                className="colorCircle"
                style={{ backgroundColor: this.state.items[0] }}
              />
            </div>
            <div
              className={`select-box--selected-item text-uppercase ${
                this.state.type === "colors" ? "color" : ""
              }`}
            >
              {this.state.selectedItem}
            </div>
            <div className="select-box--arrow" onClick={() => this.dropDown()}>
              {this.state.showItems ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            {/* rest of the options */}
          </div>
          <div
            style={{ display: this.state.showItems ? "flex" : "none" }}
            className={"select-box--items"}
          >
            {this.renderELement()}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default SelectOption;
