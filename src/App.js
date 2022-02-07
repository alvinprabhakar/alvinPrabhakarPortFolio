//import {BrowserRouter, Routes , Route} from 'react-router-dom';
import resume from './Resume/prabharesume.pdf';
import { saveAs } from "file-saver";

//import Link from '@material-ui/core/Link';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';  
import './App.css';

function App() {

  const saveFile = () => {
    saveAs(
      resume,
      "PrabhaResume.pdf"
    );
  };
  
  return (
    <>
    {/* <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter> */}
    {/* <Navbar expand="lg" bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
    <Navbar.Brand href="#home">PK</Navbar.Brand>
    </Nav>

    <Nav >
      
      <Nav.Link href="#" component={About}>About</Nav.Link>
      <Nav.Link href="#" component={Projects}>Projects</Nav.Link>
      <Nav.Link href="#" component={Contacts}>Contacts</Nav.Link>
      <Nav.Link href="#pricing">Resume</Nav.Link>
    </Nav>
    </Container>
  </Navbar> */}
  {/* <Nav >
      
      <Nav.Link href="#" component={About}>About</Nav.Link>
      <Nav.Link href="/" component={Projects}>Projects</Nav.Link>
      <Nav.Link href="#" component={Contacts}>Contacts</Nav.Link>
      <Nav.Link href="#pricing">Resume</Nav.Link>
    </Nav> */}
    {/* <div className="homepage-color">
      <button className="custom-btn"><a href="https://docs.google.com/document/d/1meWBcaK_9tBktmIh1kEZGzWw4NnKfgVc/edit?usp=sharing&ouid=115219272609269324379&rtpof=true&sd=true" target="_blank">
        Resume</a></button>  
     </div> */}
    <Home />
    <About />
    <Projects />
    <Contacts />

    
    </>
  );
}

export default App;
