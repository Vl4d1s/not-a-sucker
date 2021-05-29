import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, Input, Icon, Grid, Container } from "semantic-ui-react";
import secoundLogo from "../../../assets/images/secoundLogo.png";
import { Link } from "react-router-dom";
import { searchForProduct } from "../../../actions/searchActions";
import SemanticCard from "./SemanticCard/SemanticCard";
// import lottieOptions from "../../../lotties/lottieOptions";
// import Lottie from "react-lottie";

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
      return <p>Loading</p>;
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
