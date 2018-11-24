import React from "react";

const LeftArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      <i className="fa fa-angle-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}

const RightArrow = (props) => {
  return (
    <div className="nextArrow" onClick={props.goToNextSlide}>
      <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
    </div>
  );
}

const ActiveImage = (props) => {
  return (
    <div className="activeImage">
      <LeftArrow goToPrevSlide={props.goToPrevSlide}/>
      <img
        src={
          props.image
        }
        style={{width:"100%",maxWidth:"700px"}}
        alt="Italian Trulli"
      />
      <RightArrow goToNextSlide={props.goToNextSlide}/>
    </div>
  );
};

export default ActiveImage;
