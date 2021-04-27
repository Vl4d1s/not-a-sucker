import React from "react";
import { Dropdown, Image } from "semantic-ui-react";
import userAvatar from "../../../assets/images/userAvatar.png";

const trigger = (
  <span>
    <Image
      style={{ border: "2px solid red" }}
      bordered
      size="mini"
      spaced
      circular
      src={userAvatar}
    />
  </span>
);

const options = [
  {
    key: "user",
    text: (
      <span>
        Signed in as <strong>Bob Smith</strong>
      </span>
    ),
    disabled: true,
  },
  { key: "profile", text: "Your Profile" },
  { key: "stars", text: "Your Stars" },
  { key: "explore", text: "Explore" },
  { key: "integrations", text: "Integrations" },
  { key: "help", text: "Help" },
  { key: "settings", text: "Settings" },
  { key: "sign-out", text: "Sign Out" },
];

const DropDownUser = () => (
  <Dropdown inline trigger={trigger} options={options} />
);

export default DropDownUser;
