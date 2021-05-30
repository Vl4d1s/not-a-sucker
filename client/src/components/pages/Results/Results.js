import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, Input, Icon, Grid, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { searchForProduct } from "../../../actions/searchActions";
import SemanticCard from "./SemanticCard/SemanticCard";
import Loader from "../../../UI/Loader/Loader";
import secoundLogo from "../../../assets/images/secoundLogo.png";
import classes from "./Results.module.css";

const Results = (props) => {
  const [searchItem, setSearchItem] = useState("");
  const [tempSearchData, setTempSearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { aliExpressData, ebayData, amazonData } = useSelector(
    (state) => state.searchReducer
  );

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
    }
    await dispatch(searchForProduct(searchItem));
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className={classes.centered}>
          <Loader height="500" width="500" />
        </div>
      );
    } else {
      return (
        <Container>
          <Grid columns="equal">
            <Grid.Column>
              <SemanticCard searchData={tempSearchData.aliExpressData} />
            </Grid.Column>
          </Grid>
        </Container>
      );
    }
  };

  return (
    <div>
      <Container className={classes["upper-container"]}>
        <Image as={Link} to="/" src={secoundLogo} floated="left" size="tiny" />
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
      <br />
      {renderContent()}
    </div>
  );
};

export default Results;
