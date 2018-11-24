import React from "react";
import { Dropdown } from "semantic-ui-react";

const stateOptions = [
  { key: "38", value: "38", text: "38 inches" },
  { key: "39", value: "39", text: "39 inches" }
];

const SizeDropdown = () => (
  <Dropdown placeholder="State" search selection options={stateOptions} />
);

export default SizeDropdown;
