import "../components/About.css";

//import {Container , Row , Col} from 'react-bootstrap';


function About(){


    return (
        <>
            <div className="homepage-color">

                <div className="About">
                    <h1 className="about-me">About Me</h1>

               <ul className="about-company"> 
                    <li>Having 8 years of IT experience in <span className="about-compname">BNY Mellon Technology Private Limited</span><br/>in
                    analysis and development of critical applications using formal software engineering
                    methodologies.</li>
                </ul>

                <div className="about-skills">
                    <h3 className="about-skillsheading">Skills</h3>
                    <p className="about-skillsdesc">I love to learn new things and experiment with new technologies.<br/>
                    Below are the few skills that I use on regular basis to create new projects on the web</p>
                    <div >
                        <div className="skill-list">
                        <p className="skill-style">HTML</p>
                        <p className="skill-style">CSS</p>
                        <p className="skill-style">JavaScript</p>
                        <p className="skill-style">ReactJS</p>
                        <p className="skill-style">NodeJS</p>
                        </div>
                        <div className="skill-list">
                        <p className="skill-style">SQL</p>
                        <p className="skill-style">MongoDB</p>
                        <p className="skill-style">Python</p>
                        <p className="skill-style">Django</p>
                        </div>
                    </div>

                   

                </div>

                </div>
            </div>

        </>
    )
}


export default About;