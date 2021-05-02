import React from "react";
import { Dropdown, Image } from "semantic-ui-react";
import negishut from "../../../assets/images/negishut.png";


const trigger = (
    <span>
    <Image
      style={{ border: "2px solid with" }}
      bordered
      size="mini"
      spaced
      circular
      src={negishut}
    />
  </span>
);

const options = [
    {
        key: "user",
        text: (
          <span>
            <strong>select</strong>
          </span>
        ),
        disabled: true,
      },
  { key: "zoomi", text: "Zoom in" },
  { key: "zoomo", text: "Zoom out" },
  { key: "mouse", text: "Mouse size" },
  { key: "color", text: "Light / Dark" },
];

const Negishut = () => (
  <Dropdown inline trigger={trigger} options={options} />

);

export default Negishut;
