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
const Subheading=tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;
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
const Select =tw.select`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
export default ({
  headingText = "Career Point Career Library",


  posts = [
    
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
          <Subheading>Learn about a plethora of career options that you can choose from, in our diverse Career Library. We cover various career scapes, streams & discourses for a global outlook and choice exposure.</Subheading>
          <Posts>
            {posts.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                <Post className="group" as="a" href={post.url}>
                  <Image imageSrc={post.imageSrc} />
                  <Info>
                    <Category>{post.category}</Category>
                    <CreationDate>{post.date}</CreationDate>
                    <Title>{post.title}</Title>
                    <Description>{post.description}</Description>
                    {post.featured && post.description && <Description>{post.description}</Description>}
                  </Info>
                </Post>

            
             <Select>
                <option selected disabled hidden>{post.option}</option>
                <option>{post.option1}</option>
                <option>{post.option2}</option>
                <option>{post.option3}</option>
                <option>{post.option4}</option>
                <option>{post.option5}</option>
                <option>{post.option6}</option>
                <option>{post.option7}</option>
                <option>{post.option8}</option>
                <option>{post.option9}</option>
            </Select>
           
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
    </AnimationRevealPage>
  );
};

const getPlaceholderPost = () => ({
  
    imageSrc:
        "https://mapmycareer.in/wp-content/uploads/2022/10/Engineering.png",
      category: "",
      title: "Engineering",
      description: "While studying in school each one of us is probably very sure about what we know and what we do not know. Knowledge, wisdom, implementation, all these words are jargons at that point of time and we...",
      url: "",
      option:"View all Career",
       option1:"Aerospace/Aeronautics",
        option2:"Astronaut", 
        option3:"Agriculture and Food Engineer", 
        option4:"Instrumentation Engineer" ,
        option5:"Material and Metallurgical Engineer",
        option6:"Mineral Engineer" ,
        option7:"Petroleum Engineer",
        option8:"Pulp and Paper Engineer ",
        option9:"Polymer Engineer"
});
const getPlaceholderPost1= () => ({
  
  imageSrc:
        "https://mapmycareer.in/wp-content/uploads/2022/10/Science-and-Technology.png",
      // author: "MMC",
      category: "",
      title: "Science and Technology",
      description: "Have your pick from the Career Point scapes of Knowledge Generation through predictive & objective insights about the universe & nature and ensure applicability through various Technical advancements.",
      url: "",
      option:"View all Career",
      option1:"Dairy and Food Technologists",
      option2:"Zoologists and Wildlife Biologists", 
        option3:"Astronomers", 
        option4:"Astronomy and Astrophysicist" ,
        option5:"Agronomist",
        option6:"Nanobiotechnology/Nanotechnologist" ,
        option7:"Chemical Science and Technology",
        option8:"Computer Science ",
        option9:"Computer Programmer"

});
const getPlaceholderPost2 = () => ({
  
  imageSrc:
        "https://mapmycareer.in/wp-content/uploads/2022/10/Artistic-and-Designing-1.png",
      // author: "MMC",
      category: "",
      title: "Art & Design",
      description: "A booming industry after the Digital Makeover of the World, Art & Design does not limit itself anymore to Pen/Paper virtues and finds varied career prospects in advertising, GD, Communication design, etc.",
      url: "",
      option:"View all Career",
      option1:"Image Consulting",
      option2:"Fashion Styling & Personal Shopping", 
      option3:"Visual Designer", 
      option4:"Textile Designer" ,
      option5:"Accessory Designer",
      option6:"Automobile Designer" ,
      option7:"Architect",
      option8:"Art director",
      option9:"Artist"
});






