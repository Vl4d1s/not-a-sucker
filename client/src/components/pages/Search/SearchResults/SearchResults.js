import React from "react";
import SearchItem from "./SearchItem/SearchItem";
const SearchResults = ({ searchResults }) => {
  console.log("tempSearchData", searchResults);
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "60vw",
          margin: "auto",
        }}
      >
        {searchResults && (
          <>
            <h1>Ali express</h1>
            {searchResults[0].dataArray.map((searchItem) => (
              <SearchItem
                title={searchItem.title}
                link={searchItem.link}
                prince={searchItem.price}
                imgUrl={searchItem.image}
              />
            ))}
          </>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "60vw",
          margin: "auto",
        }}
      >
        {searchResults && (
          <>
            <h1>Amazon</h1>
            {searchResults[1].dataArray.map((searchItem) => (
              <SearchItem
                title={searchItem.title}
                link={searchItem.link}
                prince={searchItem.price}
                imgUrl={searchItem.image}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
