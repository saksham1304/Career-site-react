import React,{useState} from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";
import{db} from "../../firebaseConfig";
import { addDoc,collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

export default function TwoColContactUsWithIllustrationFullForm(){

const[name,setName]=useState();
const[email,setEmail]=useState();
const[msg,setMsg]=useState();
const[sub,setSub]=useState();
const userColl =collection(db,"contactInfo");

let navigate = useNavigate();
const handelSubmit=()=>{
  if(!name||!email||!msg||!sub)
  {
    if(!alert("Enter all details")){
     
    }
    return;
  }
   addDoc(userColl,{
    name:name,
    email:email,
    sub:sub,
    msg:msg,
    
   }).then(()=>{
    if(!alert("Our Team will contact You shortly")){
      navigate('/')
    }
   }).catch((error)=>{
     console.log(error.message);
   })
}


  

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft="true">
          <TextContent>
            { "Contact Us" && <Subheading> Contact Us</Subheading>}
            <Heading><>Feel free to <span tw="text-primary-500">get in touch</span><wbr/> with us.</></Heading>
            {"desc" && <Description>If you have any other query, fill the form below & submit your message. Somebody from our team will connect with you shortly.</Description>}
            <Form>
              <Input type="email" name="email" placeholder="Your Email Address" onChange={(event) =>
                      setEmail( event.target.value)
                    }/>
              <Input type="text" name="name" placeholder="Full Name"onChange={(event) =>
                      setName( event.target.value)
                    } />
              <Input type="text" name="subject" placeholder="Subject" onChange={(event) =>
                      setSub( event.target.value)
                    }/>
              <Textarea name="message" placeholder="Your Message Here"onChange={(event) =>
                      setMsg( event.target.value)
                    } />
                    
              
            </Form>
            <SubmitButton type="submit" onClick={handelSubmit}>Send</SubmitButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
}

