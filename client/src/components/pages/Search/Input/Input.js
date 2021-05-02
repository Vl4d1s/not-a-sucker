import React, { Component, createRef, useState } from "react";
import { Input, Button, Container } from "semantic-ui-react";
import { searchForProduct } from "../../../../actions/searchActions";
import SearchResults from "../SearchResults/SearchResults";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");
  const [tempSearchData, setTempSearchData] = useState();
  const inputRef = createRef();
  const handleClick = () => inputRef.current.focus();
  const handleSearch = async () => {
    const data = await searchForProduct(searchItem);
    setTempSearchData(data);
  };

  return (
    <Container text>
      <Input
        style={{ marginBottom: "30px", marginTop: "20px" }}
        size="big"
        fluid
        icon="search"
        placeholder="Search..."
        onChange={(e) => {
          setSearchItem(e.target.value);
        }}
      />
      <Button
        color="black"
        size="big"
        animated="fade"
        style={{ marginLeft: "10px" }}
        onClick={handleSearch}
      >
        <Button.Content visible>Search now</Button.Content>
        <Button.Content hidden>Save your money</Button.Content>
      </Button>
      <Button
        color="black"
        size="big"
        animated="fade"
        style={{ marginLeft: "10px" }}
      >
        <Button.Content visible>I'm feeling lucky</Button.Content>
        <Button.Content hidden>Random product!</Button.Content>
      </Button>
      <div>
        <SearchResults searchResults={tempSearchData} />
      </div>
    </Container>
  );
};

export default SearchBar;
