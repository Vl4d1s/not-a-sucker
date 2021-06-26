import React, { useState, useEffect, Fragment } from "react";
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
    // isLoading: reduxIsLoading,
  } = useSelector((state) => state.searchReducer);

  const [searchItem, setSearchItem] = useState(searchKey);
  const [tempSearchData, setTempSearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (aliExpressData && ebayData && amazonData) {
      setTempSearchData({ aliExpressData, ebayData, amazonData });
      setIsLoading(false);
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
    if (isLoading) {
      return (
        <div>
          <Loader height="500" width="500" />
        </div>
      );
    } else {
      return (
        <Container>
          <Grid columns={3}>
            <SemanticCard
              searchData={tempSearchData.aliExpressData}
              website={"AliExpress"}
            />
            <SemanticCard
              searchData={tempSearchData.ebayData}
              website={"Ebay"}
            />
            <SemanticCard
              searchData={tempSearchData.amazonData}
              website={"Amazon"}
            />
          </Grid>
        </Container>
      );
    }
  };

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Results;
