import React, { Component } from "react";
import Carousel from "./components/carousel";
import axios from "axios";
import Infobar from "./components/description";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {}
    };
  }
  componentDidMount = () => {
    axios.get("https://api.myjson.com/bins/14rwmq").then(response => {
      this.setState({ products: response.data });
    });
  };
  render() {
    return (
      <div className="wrapper">
        <Carousel />
        <Infobar details ={this.state.products[0]}  />
      </div>
    );
  }
}

export default Page;
