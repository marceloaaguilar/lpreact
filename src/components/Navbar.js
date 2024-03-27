import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';


const navbar = function() {
    return (
        <Navbar style={{backgroundColor: '#222D16'}}>
      <Container className='w-100 justify-content-center'>
        <Navbar.Brand href="#home">
          <Image src='logo.jpg' style={{height: '10rem', width: '100%', objectFit: 'cover', margin: '0'}}></Image>
        </Navbar.Brand>
      </Container>
    </Navbar>
    )
}

export default navbar;