import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const Testmonials = () => {
    return (
        <div style={{paddingTop: '5rem', paddingBottom: '5rem', backgroundColor: '#F8F2E9'}}>
            <Container>
                <h2>Depoimentos</h2>
                <p>Confira o que andam falando sobre este curso!</p>
                <Card style={{ width: '100%', marginTop: '2rem' }}>
                            <Card.Body>
                                <Card.Text style={{fontSize: '1.3rem', margin: '2rem', textAlign: 'left'}}>
                                    <p>“Ei, Hair! :) Você vai apaixonar por este curso. A Vanessa traz de uma forma muito didática tudo o que nós, cabeleireiros, precisamos saber sobre mechas. Fora que os diversos tipos de cabelos que ela traz e a forma de usar os produtos é imprescindível para os profissionais que querem se especializar em mechas. Façam, porque vale muito a pena!”</p>
                                    <hr/>
                                    <div style={{display: 'flex', alignContent: 'center'}}>
                                        <Image src='user.jpeg' style={{width: '2rem', height: '2rem', objectFit: 'cover', borderRadius: '70px', marginRight: '1rem'}}></Image>
                                        <p style={{fontSize: '1rem'}}>Katito Fernandes</p>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
            </Container>    
        </div>
    )
}

export default Testmonials