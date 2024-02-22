import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; 
import { css } from "styled-components/macro"; 
import Header from "components/headers/light.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import Features from "components/features/ThreeColSimple.js";


import SupportIconImage from "images/bulb-svgrepo-com.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/classroom-svgrepo-com.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About Career Point</Subheading>}
        heading="We Are Here To Enable Careers That Translate Into Success & Satisfaction."
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Our Philosophy",
            description: "A career is not just an occupation or a job, it is a way of being deeply embedded in a person’s life experience. We aspire to make it robust, satisfactory & enable exposure for better decision-making."
          },
          {
            imageSrc: ShieldIconImage,
            title: "Our Strengths",
            description: "We blend artificial intelligence and machine learning with strategic human interventions to enable & encourage a holistic career experience. This furthers the development of an ‘individual’ in a ‘group-led’ setting."
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Our Pedagogy",
            description: "We have leveraged a tech-based, humanistic approach in our model to calculate insights with objective assessments & relay expertise, to enable stronger career decisions on part of individuals."
          },
        ]}
        linkText=""
      />
    </AnimationRevealPage>
  );
};
