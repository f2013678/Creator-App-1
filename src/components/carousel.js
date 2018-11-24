import React, { Component } from "react";
import ImageGrid from "./imageGrid";
import ActiveImage from "./activeImage";

class Carousel extends Component {
  state = {
    images: [
      "https://ik.imagekit.io/flyrobe/image/upload/tr:w-1000/v1462604440/ayqlpujjs8us6ro9h6eo.jpg",
      "https://ik.imagekit.io/flyrobe/image/upload/tr:w-1000/v1462604459/zjcjgpymrrm7nhnhh8te.jpg",
      "https://ik.imagekit.io/flyrobe/image/upload/tr:w-1000/v1462604389/myurtxscgw0en5rt2fo2.jpg",
      "https://ik.imagekit.io/flyrobe/image/upload/tr:w-1000/v1462604374/e5fel5rd0l5n0g1skacj.jpg",
      "https://ik.imagekit.io/flyrobe/image/upload/tr:w-1000/v1462604421/fzvzywrdohuabel6wlzr.jpg"
    ],
    activeIndex: 0
  };

  renderGrid = () => {
    const { images } = this.state;
    if (images.length > 0) {
      return <ImageGrid images={images} />;
    }
  };

  goToNextSlide = () => {
    this.setState(prevState => ({
      activeIndex: (prevState.activeIndex + 1) % 5
    }));
  };

  goToPrevSlide = () => {
    this.setState(prevState => ({
      activeIndex: (prevState.activeIndex - 1+5) % 5
    }));
  };
  render() {
    return (
      <div className="carousel">
        {this.renderGrid()}
        <ActiveImage
          image={this.state.images[this.state.activeIndex]}
          goToNextSlide={this.goToNextSlide}
          goToPrevSlide={this.goToPrevSlide}
        />
      </div>
    );
  }
}

export default Carousel;
