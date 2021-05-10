import React, { useState } from "react";

import { Image, Input, Icon, Grid, Card, Container } from "semantic-ui-react";
import secoundLogo from "../../../assets/images/secoundLogo.png";
import { Link } from "react-router-dom";
import { searchForProduct } from "../../../actions/searchActions";
import SemanticCard from "./SemanticCard/SemanticCard";
import CircleLoader from "../../CircleLoader";

const Results = () => {
  const [searchItem, setSearchItem] = useState("");
  const [tempSearchData, setTempSearchData] = useState([]);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleSearchClick = async () => {
    const data = await searchForProduct(searchItem);
    console.log("data is", data);
    setTempSearchData(data);
    setIsSearchClicked(true);
  };

  const renderContent = () => {
    console.log(`${isSearchClicked}-${tempSearchData}`);
    if (!isSearchClicked) return null;
    if (isSearchClicked && tempSearchData.length === 0) return <CircleLoader />;
    if (isSearchClicked && tempSearchData) {
      return (
        <Container>
          {tempSearchData && isSearchClicked ? (
            <Grid columns="equal">
              <SemanticCard
                searchData={tempSearchData ? tempSearchData[0] : null}
              />
              <Grid.Column>
                <SemanticCard
                  searchData={tempSearchData ? tempSearchData[1] : null}
                />
              </Grid.Column>
              <Grid.Column>
                <SemanticCard
                  searchData={tempSearchData ? tempSearchData[1] : null}
                />
              </Grid.Column>
            </Grid>
          ) : (
            <CircleLoader />
          )}
        </Container>
      );
    }
  };

  return (
    <div>
      <div style={{ marginTop: "-50px", marginLeft: "150px" }}>
        <Image
          as={Link}
          to="/"
          src={secoundLogo}
          inline
          style={{ marginRight: "40px" }}
          floated="left"
          size="tiny"
        />
        <Input
          size="big"
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
          icon={<Icon name="search" link onClick={handleSearchClick} />}
          placeholder="Search..."
          fluid
          style={{ marginRight: "700px" }}
        />
      </div>
      <br />
      {renderContent()}
    </div>
  );
};

export default Results;
