import React from "react";
import { Image, Grid, Container } from "semantic-ui-react";
import logo from "../../../assets/images/logo.png";
import Input from "./Input/Input";

const Search = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <Image src={logo} centered />
      <Input />
    </div>
  );
};

export default Search;
