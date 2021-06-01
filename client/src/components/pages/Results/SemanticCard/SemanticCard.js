import React from "react";
import { Image, Grid, Card } from "semantic-ui-react";

const SemanticCard = ({ searchData }) => {
  const renderedCards = searchData.map((searchItem, index) => (
    <Card fluid key={index} href={searchItem.link}>
      <Image src={searchItem.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{searchItem.title}</Card.Header>
        <Card.Meta>{searchItem.price}</Card.Meta>
      </Card.Content>
    </Card>
  ));

  return <Grid.Column>{renderedCards}</Grid.Column>;
};

export default SemanticCard;
