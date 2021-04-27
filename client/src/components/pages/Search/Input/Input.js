import React, { Component, createRef } from "react";
import { Input, Button, Container } from "semantic-ui-react";

const SearchBar = () => {
  const inputRef = createRef();
  const handleClick = () => inputRef.current.focus();

  return (
    <Container text>
      <Input
        style={{ marginBottom: "30px", marginTop: "20px" }}
        size="big"
        fluid
        icon="search"
        placeholder="Search..."
      />
      <Button size="big" animated="fade">
        <Button.Content visible>Search now</Button.Content>
        <Button.Content hidden>Save your money</Button.Content>
      </Button>
      <Button size="big" animated="fade">
        <Button.Content visible>I'm feeling lucky</Button.Content>
        <Button.Content hidden>Random product!</Button.Content>
      </Button>
    </Container>
  );
};

export default SearchBar;
