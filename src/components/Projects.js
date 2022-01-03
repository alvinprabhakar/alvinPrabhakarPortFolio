import oms from '../Images/oms.png';
import prf from '../Images/prf.png';
import chs from '../Images/churchstore.png'
//import vcf from '../Images/vcf.png';
//import crud from '../Images/crud.png';
import "../components/Projects.css";
import {Image} from 'react-bootstrap';
import { BoxArrowUpRight } from 'react-bootstrap-icons';

function Projects(){


    return (
        <>
            <div className="homepage-color">

                <h1 className="project-heading">Projects</h1>

                <div className="Project">
                    <div className="project-style">
                    <div className="project-image">
                            <Image src={oms}  rounded width={400}
                                    height={200} className="about-image" />
                            </div>
                            <div className="project-words">
                            <h3 className="project-title" >Order Management - Website</h3>
                            <p className="project-description">Order management is helping to keep track of customer's orders.<br />
                                My role was to design and develop the entire website and <br />
                                also create a backend REST APIservice using Node JS and MongoDB. 
                            </p>
                            <a className="project-link" 
                                href="https://alvinprabhakar-ordermanagement.netlify.app"><BoxArrowUpRight size={25}  />
                            </a>
                            
                            </div>
                            
                    </div>
                </div>

                <div className="Project">
                    <div className="project-style">
                            <div className="project-image">
                            <Image src={prf}  rounded width={400}
                                    height={200} className="about-image" />
                            </div>
                            <div className="project-words">
                            <h3 className="project-title" >Password Reset Flow - Website</h3>
                            <p className="project-description">Password Reset to implement a correct password reset flow<br />
                             with email verification and proper update of the new password in the database <br />
                             for the web app. My role was to design and develop the entire website and <br />
                                also create a backend REST APIservice using Node JS and MongoDB.
                            </p>
                            <a className="project-link" 
                                href="https://alvinprabhakar-passwordreset.netlify.app"><BoxArrowUpRight size={25}  />
                            </a>
                            </div>
                    </div>
                </div>

                <div className="Project">
                    <div className="project-style">
                            <div className="project-image">
                            <Image src={chs}  rounded width={400}
                                    height={200} className="about-image" />
                            </div>
                            <div className="project-words">
                            <h3 className="project-title" >Church Store - Website</h3>
                            <p className="project-description">Church store is online platform for christian products.<br />
                              My role was to design and develop the entire website and <br />
                              also create a backend REST APIservice using Node JS and MongoDB.
                            </p>
                            <a className="project-link" 
                                href="http://alvinprabhakar-churchstore.herokuapp.com/"><BoxArrowUpRight size={25}  />
                            </a>
                            </div>
                    </div>
                </div>

                {/*<div className="Project">
                    <div className="project-style">
                            <div className="project-words">
                            <h3 className="project-title" >Video Format Converter - Website</h3>
                            <p className="project-description">This Website helps to convert a mp4 video file to <br />
                            HLS(m3u8) video file using Electron JS and FFMPEG plugin. <br />
                                My role was to design and develop the entire website<br />
                            </p>
                            <a className="project-link" 
                                href="https://alvinprabhakar-videoconverter.netlify.app"><BoxArrowUpRight size={25}  />
                            </a>
                            </div>
                            <div className="project-image">
                            <Image src={vcf}  rounded width={400}
                                    height={200} className="about-image" />
                            </div>
                    </div>
                </div>

                 <div className="Project">
                    <div className="project-style">
                            <div className="project-image">
                            <Image src={crud}  rounded width={400}
                                    height={200} className="about-image" />
                            </div>
                            <div className="project-words">
                            <h3 className="project-title" >CRUD Operations - React</h3>
                            <p className="project-description">This website is used to Create , Read , Update<br />
                             and Delete Operations. My role was to design and develop <br />
                              the entire website and perform all CRUD operations using ReactJS.
                            </p>
                            </div>
                    </div>
                </div> */}




            </div>

        </>
    )
}


export default Projects;