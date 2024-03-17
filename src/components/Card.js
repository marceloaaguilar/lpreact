import Image from 'react-bootstrap/Image';
import courseImage from '../assets/5HA3eR8wR6xnDPzksXTQ_23.png';
import Card from 'react-bootstrap/Card';
import offerIcon from '../assets/etiqueta-de-preco.png';
import paper from '../assets/papel.png';
import playButton from '../assets/play-fill.svg'
import './GradeCurricular.css';

const cardCourse = function(){

    return (
        <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={courseImage} />
                    <Card.Body>
                        <Card.Title>Sobre este curso</Card.Title>
                        <Card.Text>
                            <Image className="icon img-fluid" style={{overflow: 'hidden'}}src={offerIcon}/> Grátis
                        </Card.Text>
                        <Card.Text>
                            <Image className="icon" src={paper}/> 26 aulas
                        </Card.Text>
                        <Card.Text>
                            <Image className="icon" src={playButton}/> 2 horas de conteúdo de vídeo
                        </Card.Text>
            
                    </Card.Body>
                </Card>


    )
}

export default cardCourse;