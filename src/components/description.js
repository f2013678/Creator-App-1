import React from "react";
import { Container, Segment, Button } from "semantic-ui-react";
import SizeDropdown from "./sizeDropdown";
import Picker from "./datepicker";

const Infobar = props => {
  return props.details ? (
    <div className="Infobar">
      <div className="heading">
        <h3 className="title">{props.details.title}</h3>
        <div className="description">{props.details.description}</div>
      </div>
      <div className="money">
        <div>
          <h2 className="price">
            <i className="fa fa-inr" />
            {" " + props.details.price}
          </h2>
          <div className="rental">Rental for 4 days</div>
        </div>
        <div className="Value">
          {" "}
          Value <i className="fa fa-inr" /> 18000{" "}
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
          Get <strong>1080</strong> Cashback. Use code <strong>'SAVE30'</strong>{" "}
          at checkout
        </div>
        <div className="refund">
          Refundable deposit:
          <strong>
            <i className="fa fa-inr" />
            3000{" "}
          </strong>
        </div>
      </div>
      <hr />
      <div>
        <div className="sizeHeading">Know your size</div>
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
        <div className="dropdown">
        <SizeDropdown />
      </div>
      </div>

      <div className="date">
        <div className="deliveryHeading">Pick a delivery date</div>
        <div className="picker"><Picker /></div>
      </div>
      
      <div style={{ display: "flex" }}>
        <Button color="blue" fluid>
          Add to Cart
        </Button>
        <Button fluid>Add to Wishlist</Button>
      </div>
    </div>
  ) : null;
};

export default Infobar;
