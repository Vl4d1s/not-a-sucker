import React from "react";
import { Image } from "semantic-ui-react";
import logo from "../../../assets/images/logo.png";
import Input from "./Input/Input";
import classes from "./Search.modules.css";

const Search = () => {
  return (
    <div className={classes.container}>
      <Image src={logo} centered />
      <Input />
    </div>
  );
};

export default Search;
