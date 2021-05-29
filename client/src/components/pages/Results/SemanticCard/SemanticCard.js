import React from "react";
import { Image, Grid, Card } from "semantic-ui-react";

const SemanticCard = ({ searchData }) => {
  console.log(searchData);
  return (
    <Grid.Column>
      {searchData.map((searchItem, index) => (
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
  // return <p>ok</p>;
};

export default SemanticCard;
