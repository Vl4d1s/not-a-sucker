import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Button, Container, Icon } from "semantic-ui-react";
import { searchForProduct } from "../../../../actions/searchActions";
// import SearchResults from "../SearchResults/SearchResults";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");

  const dispatch = useDispatch();

  const handleSearch = async () => {
    dispatch(searchForProduct(searchItem));
  };

  return (
    <Container text>
      <Input
        style={{ marginBottom: "30px", marginTop: "20px" }}
        size="big"
        fluid
        icon={<Icon name="search" link onClick={handleSearch} />}
        placeholder="Search..."
        onChange={(e) => {
          setSearchItem(e.target.value);
        }}
      />
      <Button
        as={Link}
        to={searchItem.trim().length > 0 ? "/results" : "/"}
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
    </Container>
  );
};

export default SearchBar;
