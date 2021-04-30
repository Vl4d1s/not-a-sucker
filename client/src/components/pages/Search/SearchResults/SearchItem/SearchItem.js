import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const SearchItem = ({ imgUrl, title, link, price }) => (
  <Card>
    <Image src={imgUrl ? imgUrl : "url"} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title ? title : " title"}</Card.Header>
      <Card.Meta>{price ? price : "price"}</Card.Meta>
      {/* <Card.Description>
        Daniel is a comedian living in Nashville.
      </Card.Description> */}
    </Card.Content>
    <Card.Content extra>
      <a href={link ? link : "none"}>
        <Icon name="user" />
        Go to item
      </a>
    </Card.Content>
  </Card>
);

export default SearchItem;
