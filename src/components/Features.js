import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import videoIcon from '../assets/video.png';
import apostila from '../assets/apostila.png';
import certiifcado from '../assets/certificado.png';
import '../components/Features.css';

const Features = function() {

    return (
        <div className='featuresCourse'>
        <Container style={{paddingBottom: '5rem'}}>
            <h2 id="titleFeature">O que você vai encontrar</h2>
            <div id="cards" >
                <Card style={{ width: '100%' }}>
                    <Card.Img  class="cardImg" src={videoIcon} />
                    <Card.Body>
                        <Card.Title>Vídeos</Card.Title>
                        <Card.Text>
                            Aulas compostas por aulas teóricas e práticas, mostrando o passo a passo para execução perfeita das mechas em variadas técnicas e tipos de cabelos.
                        </Card.Text>


                    </Card.Body>


                </Card>
                <Card style={{ width: '100%' }}>
                    <Card.Img  class="cardImg" src={apostila} />
                    <Card.Body>
                        <Card.Title>Apostila</Card.Title>
                        <Card.Text>
                        Disponibilização de apostila com conteúdo que foi passado nas aulas e fichas de anamnese para que você possa estudar e consultar no dia a dia.
                        </Card.Text>


                    </Card.Body>


                </Card>
                <Card style={{ width: '100%' }}>
                    <Card.Img  class="cardImg" src={certiifcado} />
                    <Card.Body>
                        <Card.Title>Vídeos</Card.Title>
                        <Card.Text>
                        Após aproveitar e aprender com todo o conteúdo disponibilizado, receba certificado de Conclusão do Curso de Mechas.
                        </Card.Text>


                    </Card.Body>
                </Card>

            </div>


        </Container>

        </div>



    )

}

export default Features;
