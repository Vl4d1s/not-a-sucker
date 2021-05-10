import React from "react";
import { Image, Input } from "semantic-ui-react";
import secoundLogo from "../../../assets/images/secoundLogo.png";

const Results = () => {
  return (
    <div style={{ marginTop: "-50px", marginLeft: "150px" }}>
      <Image
        src={secoundLogo}
        inline
        style={{ marginRight: "40px" }}
        floated="left"
      />
      <Input
        size="big"
        icon="search"
        placeholder="Search..."
        fluid
        style={{ marginRight: "700px" }}
      />
    </div>
  );
};

export default Results;
