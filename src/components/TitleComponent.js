import React from "react";
import { Helmet } from "react-helmet";

const TitleComponent = (props) => {
  const { title } = props;
  var defaultTitle = "Okcerk's - Cartoons and comics by Andres Marc";
  return (
    <Helmet>
      <title>{title ? title : defaultTitle}</title>
    </Helmet>
  );
};

export default TitleComponent;
