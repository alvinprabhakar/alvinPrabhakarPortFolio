import React from 'react';
import {Image} from 'react-bootstrap';
import "../components/Home.css";
import image from '../prabhanew.jpg';
//import About from '../components/About';
import { SocialIcon  } from 'react-social-icons';



function Home() {

 

return (
<>
<div className="homepage-color">


  <div className="Home">

      <div>
      <Image src={image}  rounded width={300}
    height={350} className="about-image" />
  
      </div>

      <div>
      <p className="about-greeting">Hi, I am</p>
      <h1 className="about-name">Prabhakaran Krishnan</h1>
      <p className="about-designation">Full Stack Web Developer</p>
      <p className="about-description">
         I describe myself as someone who is a quick learner and <br />
         loves problem solving by using simple and scalable solutions</p>
    <p className="about-description-2">I enjoy learning new skills and implementing them in real life!</p>
    <br />
    <h5 className="about-gmail">Email : <span>alvinprabhakar@gmail.com</span> </h5><br />
    <div className="about-social">
      <SocialIcon url="https://www.linkedin.com/in/prabhakaran-krishnan-a51579156/" bgColor="silver"/>
      <SocialIcon network="twitter" url="https://www.linkedin.com/in/prabhakaran-krishnan-a51579156/" bgColor="silver"/>
      <SocialIcon network="github" url="https://github.com/alvinprabhakar" bgColor="silver"/>
      <SocialIcon network="facebook" url="https://www.facebook.com/prbhkaran.slm" bgColor="silver"/>
      <SocialIcon network="instagram" url="https://www.instagram.com/alvinprabhakartest1/" bgColor="silver"/>
  </div>
  </div>

  </div>
  

  </div>

</>
);
}

export default Home;
