import React from "react";

const styles = {
  marginBottom: "20px"
};

export default ({ url, title }) => (
  <div style={styles}>
    <h2>{title}</h2>
    <img src={url} alt="img" />
  </div>
);
