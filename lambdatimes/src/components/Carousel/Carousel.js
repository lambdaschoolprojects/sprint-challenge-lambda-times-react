import React, { Component } from "react";
import { carouselData } from "../../data";
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: 0,
      data: []
    };
  }
  componentDidMount() {
    this.setState({ data: carouselData });
  }

  leftClick = () => {
    this.setState(prevState => {
      return {
        selectedImage:
          (prevState.selectedImage - 1 + prevState.data.length) %
          prevState.data.length
      };
    });
  };

  rightClick = () => {
    this.setState(prevState => {
      return {
        selectedImage: (prevState.selectedImage + 1) % prevState.data.length
      };
    });
  };

  selectedImage = () => {
    let { selectedImage, data } = this.state;

    return (
      <img
        src={data[selectedImage]}
        style={{ display: "block" }}
        alt="stop linting error"
      />
    );
  };

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
