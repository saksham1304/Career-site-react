import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/icons8-personality-64.png";
import ShieldIconImage from "../../images/brain-svgrepo-com.svg";
import CustomizeIconImage from "../../images/icons8-hobby-64.png";


const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
 

  const cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Aptitude",
      description: "Discover your innate talents & intrinsic inclinations; so as to plan a seemingly, robust career path, which helps build upon your natural abilities."
    },
    { imageSrc: SupportIconImage, title: "Personality" ,
      description:"From amongst 28 varied personality traits and 14 different personality types, recognize your type & understand your inherent Behavioral traits, to ensure success in your career endeavors."
      },
    { imageSrc: CustomizeIconImage, title: "Interests",
      description:"Map your aptitude and personality against your interests to make well-informed choices towards a career that helps you grow & enables contentment."
  
  },
   
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Make  <span tw="text-primary-500">Informed & Reliable Career Choices</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description }
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
