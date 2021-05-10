import React from "react";
import { Image, Grid, Card } from "semantic-ui-react";
import CircleLoader from "../../../CircleLoader";

const SemanticCard = ({ searchData }) => {
  return (
    <Grid.Column>
      {searchData.dataArray.map((searchItem, index) => (
        <Card key={index}>
          <Image src={searchItem.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{searchItem.title}</Card.Header>
            <Card.Meta>{searchItem.price}</Card.Meta>
          </Card.Content>
        </Card>
      ))}
    </Grid.Column>
  );
};

export default SemanticCard;
