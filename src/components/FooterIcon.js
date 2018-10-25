import React from "react";
import { string, shape } from "prop-types";

const FooterIcon = ({ icon }) => {
  return <div>{icon.name}: {icon.link}</div>;
};

FooterIcon.propTypes = {
  icon: shape({
    link: string
  })
};

export default FooterIcon;
