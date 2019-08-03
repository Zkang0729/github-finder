import React, { Fragment } from "react";

const About = () => {
  const style = {
    fontSize: "3rem",
    textAlign: "center"
  };

  return (
    <Fragment>
      <h1 style={style}>About This App</h1>
      <p text="justify" style={{ textAlign: "center" }}>
        App to search Github users, it functions wtih the help of the github and
        the axios api.
      </p>
      <p style={{ fontSize: ".8rem", textAlign: "center" }}>Version 1.0.0</p>
      <p style={{ textAlign: "center" }}>Author: Harry kang</p>
    </Fragment>
  );
};

export default About;
