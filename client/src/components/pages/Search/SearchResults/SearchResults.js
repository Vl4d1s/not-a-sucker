import React from "react";
import SearchItem from "./SearchItem/SearchItem";
const SearchResults = ({ searchResults }) => {
  console.log("tempSearchData", searchResults);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "60vw",
        margin: "auto",
      }}
    >
      {searchResults &&
        searchResults.dataArray.map((searchItem) => (
          <SearchItem
            title={searchItem.title}
            link={searchItem.link}
            prince={searchItem.price}
            imgUrl={searchItem.image}
          />
        ))}
    </div>
  );
};

export default SearchResults;
