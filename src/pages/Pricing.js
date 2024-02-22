import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Pricing />
      
    </AnimationRevealPage>
  );
};
