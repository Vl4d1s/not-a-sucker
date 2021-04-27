import React from "react";
import { Container } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import logo from "../../../assets/images/logo.png";
import Input from "./Input/Input";

const Search = () => {
  return (
    <Container>
      <Image src={logo} centered />
      <Input />
    </Container>
  );
};

export default Search;
