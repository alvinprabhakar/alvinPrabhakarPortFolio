import { SocialIcon  } from 'react-social-icons';
import "../components/Contacts.css";

function Contacts(){


    return (
        <>
            <div className="homepage-color">

                <div>
                    <h4 className="contact-text">Contact me on</h4>
                </div>
            <div className="final-social">
      <SocialIcon url="https://www.linkedin.com/in/prabhakaran-krishnan-a51579156/" bgColor="silver"/>
      <SocialIcon network="twitter" url="https://www.linkedin.com/in/prabhakaran-krishnan-a51579156/" bgColor="silver"/>
      <SocialIcon network="github" url="https://github.com/alvinprabhakar" bgColor="silver"/>
      <SocialIcon network="facebook" url="https://www.facebook.com/prbhkaran.slm" bgColor="silver"/>
      <SocialIcon network="instagram" url="https://www.instagram.com/alvinprabhakartest1/" bgColor="silver"/>
            </div>

            <div>
                <p className="contact-owner">Built By Prabhakaran Krishnan</p>
            </div>
            </div>


        </>
    )
}

export default Contacts;