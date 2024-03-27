import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';


const navbar = function() {
    return (
        <Navbar style={{backgroundColor: '#222D16'}}>
      <Container className='justify-content-center'>
        <Navbar.Brand href="#home">
          <Image src='logo.jpg' className='img-fluid' style={{height: '12rem', width: '100%', objectFit: 'cover'}}></Image>
        </Navbar.Brand>
      </Container>
    </Navbar>
    )
}

export default navbar;