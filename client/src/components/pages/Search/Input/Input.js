import React, { Component, createRef } from "react";
import { Input, Button, Container } from "semantic-ui-react";

const SearchBar = () => {
  const inputRef = createRef();
  const handleClick = () => inputRef.current.focus();

  return (
    <Container>
      <Input size="big" fluid icon="search" placeholder="Search..." />
      <br />
      <Button size="big" primary animated="fade">
        <Button.Content visible>Search now</Button.Content>
        <Button.Content hidden>Save your money</Button.Content>
      </Button>
    </Container>
  );
};

export default SearchBar;
