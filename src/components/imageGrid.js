import React from "react";
import Thumbnail from "./thumbnail";

const ImageGrid = props => {
  const images = props.images;
  const gridItems = images.map(image => (
    <Thumbnail imageURL={image}>Image1</Thumbnail>
  ));
  return <div className="imageGrid">{gridItems}</div>;
};

export default ImageGrid;
