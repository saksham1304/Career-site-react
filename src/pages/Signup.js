import React ,{useEffect,useState}from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";

import illustration from "images/signup-illustration.svg";
import logo from "images/logo.png";
import googleIconImageSrc from "images/google-icon.png";

import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";

import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from "../firebaseConfig";





const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;


const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mx-auto max-w-xs mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;


function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name:"",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if ( !values.name||!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
<>
      <AnimationRevealPage>
    <Container>
      <Content>
        <MainContainer>
          <LogoLink href={"#"}>
            <LogoImage src={logo} />
          </LogoLink>
          <MainContent>
            <Heading>Sign Up For Career Point</Heading>
            <FormContainer>
              <SocialButtonsContainer>
               
                  <SocialButton  href="https://google.com">
                    <span className="iconContainer">
                      <img src={googleIconImageSrc} className="icon" alt="" />
                    </span>
                    <span className="text">Sign Up With Google</span>
                  </SocialButton>
              </SocialButtonsContainer>
              <DividerTextContainer>
                <DividerText>Or Sign up with your e-mail</DividerText>
              </DividerTextContainer>
              <Form>
                <Input type="name" placeholder="Name" 
                      onChange={(event) =>
                      setValues((prev) => ({ ...prev, name: event.target.value }))
                    }
                />
                <Input type="email" placeholder="Email" 
                      onChange={(event) =>
                      setValues((prev) => ({ ...prev, email: event.target.value }))
                    }
                />
                <Input type="password" placeholder="Password" 
                         onChange={(event) =>
                          setValues((prev) => ({ ...prev, pass: event.target.value }))
                         }
                />
                <b style={{color:"red"}}>{errorMsg}</b>
                </Form>

                <SubmitButton type="submit" onClick={handleSubmission} disabled={submitButtonDisabled} >
                
                  <SignUpIcon className="icon" />
                  <span className="text">Sign Up</span>
                </SubmitButton>
                <Form>
                

                <p tw="mt-8 text-sm text-gray-600 text-center">
                  Already have an account?{" "}
                  <a href="Login" tw="border-b border-gray-500 border-dotted">
                    Sign In
                  </a>
                </p>
              </Form>
            </FormContainer>
          </MainContent>
        </MainContainer>
        <IllustrationContainer>
          <IllustrationImage imageSrc={illustration} />
        </IllustrationContainer>
      </Content>
    </Container>
  </AnimationRevealPage>
</>

  );
}

export default Signup;