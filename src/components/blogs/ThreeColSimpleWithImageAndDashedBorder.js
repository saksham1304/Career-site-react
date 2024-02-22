import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle, Subheading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`
]);

const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-secondary-100`;
const Link = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({
  subheading = "",
  heading = <>Get Suitably Guided In <span tw="text-primary-500">Crucial Career Decisions.</span></>,
  description = "Find apt career-specific knowledge curated by subject matter experts across the globe.",

}) => {
  const blogPosts = [
    {
      imageSrc:
        "https://mapmycareer.in/wp-content/uploads/2022/12/What-do-you-think-leads-to-Success-400x250.jpg",
      author: "MMC",
      category: "Education",
      title: "Knacks, Talent and Aptitude – What Leads to Success?",
      description: "While studying in school each one of us is probably very sure about what we know and what we do not know. Knowledge, wisdom, implementation, all these words are jargons at that point of time and we simply appreciate those people who are famous and believe that they...",
      url: "https://mapmycareer.in/what-do-you-think-leads-to-success/"
    },
    {
      imageSrc:
        "https://mapmycareer.in/wp-content/uploads/2022/12/10-Years-from-now-What-would-be-the-best-career-for-you-400x250.jpg",
      author: "MMC",
      category: "Education",
      title: "10 Years From Now, What would be the Best Career For You?",
      description: "Have you ever thought What would be the best career for you after 10 years? In this article, we have explained the same in detail.",
      url: "https://mapmycareer.in/10-years-from-now-what-would-be-the-best-career-for-you/"
    },
    {
      imageSrc:
        "https://mapmycareer.in/wp-content/uploads/2022/11/The-Role-of-Parents-in-their-Childs-Important-Career-Decisions-400x250.jpg",
      author: "MMC",
      category: "Education",
      title: "The Role of Parents in Their Child’s Important Career Decisions",
      description: "Career Choice is often a matter of extreme dilemma & differences both for the children and the parents. It becomes hectic and a hefty task all in all to think of this monumental decision if you don’t already have an aspiration and a direction.  There are...",
      url: "https://mapmycareer.in/the-role-of-parents-in-their-childs-important-career-decisions/"
    }
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <HeadingTitle>{heading}</HeadingTitle>
          <HeadingDescription>{description}</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Details>
                  <MetaContainer>
                    <Meta>
                      <UserIcon />
                      <div>{post.author}</div>
                    </Meta>
                    <Meta>
                      <TagIcon />
                      <div>{post.category}</div>
                    </Meta>
                  </MetaContainer>
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                  <Link href={post.url}>Read More</Link>
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
