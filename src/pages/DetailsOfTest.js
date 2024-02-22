import React,{useEffect}from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import tw from "twin.macro";
import { css } from "styled-components/macro"; 
import Header from "components/headers/light.js";

import ContactUsForm from "components/features/VerticalWithAlternateImageAndText";




export default () => {




  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
     
    </AnimationRevealPage>
  );
};
