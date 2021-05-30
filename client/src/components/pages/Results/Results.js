import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, Input, Icon, Grid, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import {
  searchForProduct,
  clearSearchResults,
} from "../../../actions/searchActions";
import SemanticCard from "./SemanticCard/SemanticCard";
import Loader from "../../../UI/Loader/Loader";
import secoundLogo from "../../../assets/images/secoundLogo.png";
import classes from "./Results.module.css";

const Results = () => {
  const {
    aliExpressData,
    ebayData,
    amazonData,
    searchKey,
    isLoading: reduxIsLoading,
  } = useSelector((state) => state.searchReducer);

  const [searchItem, setSearchItem] = useState("");
  const [tempSearchData, setTempSearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(reduxIsLoading);

  console.log(isLoading);

  useEffect(() => {
    if (aliExpressData && ebayData && amazonData) {
      setTempSearchData({ aliExpressData, ebayData, amazonData });
      setIsLoading(false);
      setSearchItem(searchKey);
    }
  }, [aliExpressData, ebayData, amazonData]);

  const dispatch = useDispatch();

  const handleSearchClick = async () => {
    if (!isLoading) {
      setIsLoading(true);
      setSearchItem("");
    }
    await dispatch(searchForProduct(searchItem));
  };

  const handleImageClick = () => {
    dispatch(clearSearchResults());
  };

  const renderContent = () => {
    if (isLoading && searchKey) {
      return (
        <div className={classes.centered}>
          <Loader height="500" width="500" />
        </div>
      );
    } else if (!isLoading && tempSearchData.length === 0) {
      return;
    } else {
      return (
        <Container>
          <Grid columns="equal">
            <Grid.Column>
              <SemanticCard searchData={tempSearchData.aliExpressData} />
            </Grid.Column>
            <Grid.Column>
              <SemanticCard searchData={tempSearchData.ebayData} />
            </Grid.Column>
            <Grid.Column>
              <SemanticCard searchData={tempSearchData.amazonData} />
            </Grid.Column>
          </Grid>
        </Container>
      );
    }
  };

  return (
    <div>
      <Container className={classes["upper-container"]}>
        <Image
          as={Link}
          to="/"
          src={secoundLogo}
          floated="left"
          size="tiny"
          onClick={handleImageClick}
        />
        <Input
          size="big"
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
          icon={<Icon name="search" link onClick={handleSearchClick} />}
          placeholder="Search..."
          fluid
        />
      </Container>
      {renderContent()}
    </div>
  );
};

export default Results;
