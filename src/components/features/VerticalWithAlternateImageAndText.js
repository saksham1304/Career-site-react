import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc:
        "https://m.media-amazon.com/images/I/41Aicho9oOL.jpg",
      subtitle: "Included",
      title: "Aptitude Test",
      description:
        "Aptitude tests will usually be given during the job interview to weed out unqualified candidates. They are usually in multiple-choice format and can vary widely in test length and the types of questions asked.The downside to these tests is that they only measure a candidate's specific knowledge of the job. While a solid understanding of any job is crucial, this aptitude alone doesn't ensure that the applicant will be a good fit for the organization as a whole.",
      url: "https://forms.gle/qtTRahvK5J8Rqv4W8"
     
    },

    {
      imageSrc:
        "https://cdn.123test.com/content/COM/personality_test_cloud_800-600.png",
      subtitle: "Included",
      title: "Personality Test",
      description:
        "Personality tests usually use a wide variety of situational questions and ask what the respondent would most likely do if they found themselves in that situation. A personality test can determine if someone is outgoing, compassionate, trustworthy, a problem solver, or impulsive based on their collective answers.These tests consider a variety of personality traits and show which qualities are the strongest and which are the weakest, based on your individual answers",
      url: "https://forms.gle/qtTRahvK5J8Rqv4W8"
    },

    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9SeM5M1JeZUmqG6R7WVwAhFDAXbE0OpofA&usqp=CAU",
      subtitle: "Included",
      title: "Motivational Test",
      description:
        "Desire or Interest tests, also known as motivational tests, are specifically created to help respondents determine their career desires. They often ask you to choose between different images or pictures, selecting your likes and dislikes. They may ask specific questions used to determine which attributes of specific careers best appeal to you.They can help to determine if you would prefer a job that lets you work with others, lets you express your creativity, or is more analytical, to name a few.These tests are best used as a way to organize your likes and dislikes and can help you look into career choices that you otherwise may not have considered.",
      url: "https://forms.gle/qtTRahvK5J8Rqv4W8"
    }
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle> Career Quiz</HeadingTitle>
          <HeadingDescription>
          There are numerous different career tests available, focusing on determining slightly different personal characteristics or attributes. Here we are providing you the best test which can frame your career:
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                <Link href={card.url}>Take Test</Link>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
