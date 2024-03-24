import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Testmonials = () => {
    return (
        <div style={{paddingTop: '5rem', paddingBottom: '5rem', backgroundColor: '#F8F2E9'}}>
            <Container>
                <h2>Depoimentos</h2>
                <p>Confira o que andam falando sobre este curso!</p>
                <Row className='align-items-center mt-5'>
                    <Col lg={4} >
                        <Image src='fotoDepoimento2.jpg' className="img-fluid" style={{borderRadius: '10px'}}></Image>
                    </Col>
                    <Col lg={4}>
                        <Image src='fotoDepoimento1.jpg' className="img-fluid" style={{borderRadius: '10px', padding: '2rem'}}></Image>
                    </Col>
                    <Col lg={4}>
                        <Image src='fotoDepoimento3.jpg' className="img-fluid" style={{borderRadius: '10px'}}></Image>
                    </Col>



                </Row>
            </Container>    
        </div>
    )
}

export default Testmonials