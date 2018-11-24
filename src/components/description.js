import React from "react";

const Infobar = props => {
  return props.details ? (
    <div className="Infobar">
      <div className="heading">
        <div className="title">{props.details.title}</div>
        <div className="description">{props.details.description}</div>
      </div>
      <hr />
      <div className="money">
        <h2 className="price">
          <i class="fa fa-inr" /> 
          {props.details.price}
        </h2>
        <div className="rental">Rental for 4 days</div>
        <div className="Value">
          {" "}
          Value <i class="fa fa-inr" /> 18000{" "}
        </div>
      </div>
      <hr />
      <div className="offers">
        <span>Offers</span>
        <div>
          <img
            src={"https://ik.imagekit.io/flyrobe/Decor/offer_2x_H14unChO7.png"}
            alt=""
            style={{ width: "25px" }}
          />
          Get 1080 Cashback. Use code 'SAVE30' at checkout
        </div>
        <div className="refund">
          Refundable deposit:
          <i class="fa fa-inr" />
          3000{" "}
        </div>
      </div>
      <hr />
      <div>
        <span>Know your size</span>
        <div className="sizebox">
          <div>
            <img
              className="sizeIcons"
              src={
                "https://ik.imagekit.io/flyrobe/details-page/Artboard_57_copy_2_2x-8_rJDyBLVhm.png"
              }
              alt=""
            />
            <div>Round</div>
          </div>

          <div>
            <img
              className="sizeIcons"
              src={
                "https://ik.imagekit.io/flyrobe/details-page/Artboard_57_2x-8_HyDkHL43X.png"
              }
              alt=""
            />
            <div>Flat</div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Infobar;
