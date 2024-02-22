import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

export default ({
  headingText = "Blog Posts",
  posts = [
    {
      imageSrc:
        "https://mapmycareer.in/wp-content/uploads/2022/09/Nutrition-A-Game-Changing-Career-Option-400x250.jpg",
      category: "Education",
      date: "",
      title: "Nutrition: A Game Changing Career Option",
      description:
        "Anyone who is not fully aware and informed of the wide array of prospective career choices, including parents and students, would agree with me when I say that some careers are better than others. However, this makes me think that due to this presumption, there are...",
      url: "https://mapmycareer.in/nutrition-a-game-changing-career-option/",
      featured: true
    },
    getPlaceholderPost(),
    getPlaceholderPost1(),
    getPlaceholderPost2(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost()
  ]
}) => {
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => {
    setVisible(v => v + 6);
  };
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Posts>
            {posts.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                <Post className="group" as="a" href={post.url}>
                  <Image imageSrc={post.imageSrc} />
                  <Info>
                    <Category>{post.category}</Category>
                    <CreationDate>{post.date}</CreationDate>
                    <Title>{post.title}</Title>
                    {post.featured && post.description && <Description>{post.description}</Description>}
                  </Info>
                </Post>
              </PostContainer>
            ))}
          </Posts>
          {visible < posts.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
            </ButtonContainer>
          )}
        </ContentWithPaddingXl>
      </Container>
      {/* <Footer /> */}
    </AnimationRevealPage>
  );
};

const getPlaceholderPost = () => ({
  
  imageSrc:
        "https://mapmycareer.in/wp-content/uploads/2022/12/What-do-you-think-leads-to-Success-400x250.jpg",
      category: "Education",
      title: "Knacks, Talent and Aptitude – What Leads to Success?",
      description: "While studying in school each one of us is probably very sure about what we know and what we do not know. Knowledge, wisdom, implementation, all these words are jargons at that point of time and we simply appreciate those people who are famous and believe that they...",
      url: "https://mapmycareer.in/what-do-you-think-leads-to-success/"
});
const getPlaceholderPost1= () => ({
  
  imageSrc:
        "https://mapmycareer.in/wp-content/uploads/2022/12/10-Years-from-now-What-would-be-the-best-career-for-you-400x250.jpg",
      // author: "MMC",
      category: "Education",
      title: "10 Years From Now, What would be the Best Career For You?",
      description: "Have you ever thought What would be the best career for you after 10 years? In this article, we have explained the same in detail.",
      url: "https://mapmycareer.in/10-years-from-now-what-would-be-the-best-career-for-you/"
});
const getPlaceholderPost2 = () => ({
  
  imageSrc:
        "https://mapmycareer.in/wp-content/uploads/2022/11/The-Role-of-Parents-in-their-Childs-Important-Career-Decisions-400x250.jpg",
      // author: "MMC",
      category: "Education",
      title: "The Role of Parents in Their Child’s Important Career Decisions",
      description: "Career Choice is often a matter of extreme dilemma & differences both for the children and the parents. It becomes hectic and a hefty task all in all to think of this monumental decision if you don’t already have an aspiration and a direction.  There are...",
      url: "https://mapmycareer.in/the-role-of-parents-in-their-childs-important-career-decisions/"
});
