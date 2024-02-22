import React from "react";
import { css } from "styled-components/macro"; 
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";

import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";

import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";

export default () => (
  <AnimationRevealPage>
    <Hero/>
    <MainFeature />
    <Features />
    <MainFeature2 />
    {/* <Portfolio /> */}
    <Testimonial
      subheading="Testimonials"
      heading={
        <>
          Here’s Why They Love<span tw="text-primary-500">Career Point!</span>
        </>
      }
      description="Our users have discovered their ideal academic and career path using Career Points’s  career guidance solution. Looking for career counselling online? Hear what our users have to share about their experience:"
      testimonials={[
        {
          imageSrc:
            "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2022/01/28/7cbd1310-cdd3-49dc-ab23-976da5a2d159_34dc882b.jpg?itok=iUasxG6y&v=1643358728",
          profileImageSrc:
            "https://media.istockphoto.com/id/887302366/photo/portrait-of-male-teenage-student-in-uniform-outside-buildings.jpg?s=612x612&w=0&k=20&c=hoha_IGYlGKM57gqX0QPQdnBvnrJPtHLn8ErZ6QK2nY=",
          quote:
            " Career Point helped me and my family! With clarity about my career, I have found out a lot of difference in my academics. I know exactly where I need to focus for better scores. ",
          customerName: "Aman Manjkhola",
          customerTitle: "Btech C.S.E."
        },
        {
          imageSrc:
            "https://www.essar.com/wp-content/uploads/2021/10/20211025_Essar-Ports-and-Foundation-school-uniforms-Hazira-L.png",
          profileImageSrc:
            "https://www.shutterstock.com/image-photo/happy-little-girl-smiling-camera-260nw-1114926683.jpg",
          quote:
            " Career point was nice. The counsellor was very interactive and It made me feel comfortable enough to talk about everything. I thought career counselling would just include pen and paper and giving me career options, but with Mentoria, I was explained everything in detail. The assessment was really helpful; it helped me understand myself better. ",
          customerName: "Akshita Gupta",
          customerTitle: "Btech C.S.E"
        }
      ]}
      textOnLeft={true}
    />
      <Blog />
    <FAQ
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
      subheading=""
      heading={
        <>
        <span tw="text-primary-500">FAQ</span>
        </>
      }
    />
  
    
    <Footer />
  </AnimationRevealPage>
);
