import React from "react";
import "./detail.scss";
import SelectOption from "../../ui/options/SelectOption";
import Button from "../../ui/Button";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Gallery from './Slider';
class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
      
    };
  }
  submitHandle = e => {
    e.preventDefault();
  };
  handleFavorite = () => {
    this.setState(prevState => ({
      favorite: !prevState.favorite
    }));
  };
  render() {
    const options = [1, 2, 3, 4, 5];
    const colors = ["red", "blue", "purple"];
    return (
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 text d-flex ">
            <h1 className="text-uppercase">Beats Solo3 wireless</h1>
            <div className="star-container" />
            <p>
              With up to 40 hours of battery life, Beats Solo3 Wireless is your
              perfect everyday headphone. Get the most out of your music with an
              award-winning, emotionally charged Beats listening experience.
            </p>

            <form onSubmit={this.submitHandle} id="form">
              <div className="form-field">
                <SelectOption items={options} type="numbers" />
                <SelectOption items={colors} type="colors" />
              </div>
              <div className="form-field">
                <Button text={"add to cart"} type={""} />
                <div onClick={this.handleFavorite} className="heart-container">
                  {this.state.favorite ? <FaHeart /> : <FaRegHeart />}
                </div>
              </div>
            </form>
          </div>
          {/* end of col-lg-6 */}
          <div className="col-lg-6">
            <Gallery></Gallery>
        </div>
        </div>
      </div>
    );
  }
}

export default Detail;
