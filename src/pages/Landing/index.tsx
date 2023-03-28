import React from "react";
import { useNavigate } from "react-router-dom";

import { BucketLogo, Container } from "./styles";

// import { useNavigate } from "react-router-dom";

const Landing = () => {
  let navigate = useNavigate();

  return (
    <Container>
      <BucketLogo onClick={() => navigate("/bucket-list")} />
    </Container>
  );
};

export default Landing;
