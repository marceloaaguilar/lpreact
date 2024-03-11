import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import playButton from '../assets/play-fill.svg'
import studentProgress from '../assets/journal-check.svg';
import './GradeCurricular.css';


const  GradeCurricular = () => {
    return (
        <div>
        <Container>
            <Row>
                <Col>
                    <p>Grade Curricular</p>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Bem vindo ao Curso</Accordion.Header>
                            <Accordion.Body>
                               <img src={playButton}></img> Introdução ao Curso
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Introdução</Accordion.Header>
                            <Accordion.Body>
                                <img src={playButton}></img>
                                Como fazer a anamnese e o teste de mecha
                            </Accordion.Body>
                            <Accordion.Body>
                                <img src={playButton}></img>
                                Cream Blond
                            </Accordion.Body>
                            <Accordion.Body>
                                <img src={playButton}></img>
                                Tecnologia do Cream Blond
                            </Accordion.Body>
                            <Accordion.Body>
                                <img src={playButton}></img>
                                Aplicação do Cream Blond
                            </Accordion.Body>
                            <Accordion.Body>
                                <img src={studentProgress}></img> 
                                 Teste seu aprendizado
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>1º Cabelo - Cream Blond</Accordion.Header>
                            <Accordion.Body>
                                <img src={playButton}></img>
                                Avaliação - Anamnese e teste de mechas
                            </Accordion.Body>
                            <Accordion.Body>
                                <img src={playButton}></img>
                                Aplicação da mecha
                            </Accordion.Body>
                            <Accordion.Body>
                                <img src={playButton}></img>
                                Lavatório
                            </Accordion.Body>
                            <Accordion.Body>
                                <img src={playButton}></img>
                                Tonalização e Finalização
                            </Accordion.Body>
                            <Accordion.Body>
                                <img src={studentProgress}></img> 
                                 Vamos ver o que você aprendeu até aqui!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>2º Cabelo - Colore Branco</Accordion.Header>
                            <Accordion.Body>
                                <img src={playButton}></img>
                                Avaliação - Anamnese e teste de mechas
                            </Accordion.Body>
                            <Accordion.Body>
                                <img src={playButton}></img>
                                Reaplicação
                            </Accordion.Body>
                            <Accordion.Body>
                                <img src={playButton}></img>
                                Lavatório
                            </Accordion.Body>
                            <Accordion.Body>
                                <img src={playButton}></img>
                                Tonalização e Finalização
                            </Accordion.Body>
                            <Accordion.Body>
                                <img src={studentProgress}></img> 
                                 Vamos ver o que você aprendeu até aqui!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>3º Cabelo - Azurro</Accordion.Header>
                            <Accordion.Body>
                                <img src={playButton}></img>
                                Avaliação - Anamnese e teste de mechas
                            </Accordion.Body>
                            <Accordion.Body>
                                <img src={playButton}></img>
                                Aplicação de produto na mecha
                            </Accordion.Body>
                            <Accordion.Body>
                                <img src={playButton}></img>
                                Técnica Free Hands e reaplicação
                            </Accordion.Body>
                            <Accordion.Body>
                                <img src={playButton}></img>
                                Higienização e tratamento
                            </Accordion.Body>
                            <Accordion.Body>
                                <img src={playButton}></img>
                                Acabamento de raiz e tonalização
                            </Accordion.Body>
                            <Accordion.Body>
                                <img src={playButton}></img>
                                Higienização e resultado final
                            </Accordion.Body>
                            <Accordion.Body>
                                <img src={studentProgress}></img> 
                                Teste seu conhecimento!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Próximos Passos</Accordion.Header>
                            <Accordion.Body>
                                <img src={playButton}></img>
                                Compre todos os produtos deste curso em poucos cliques!
                            </Accordion.Body>
                            <Accordion.Body>
                                <img src={playButton}></img>
                                Mais Recursos para Você!
                            </Accordion.Body>
                            
                        </Accordion.Item>
                        
                    </Accordion>
                </Col>
                <Col>
                
                
                </Col>
            </Row>
        </Container>
        </div>
    )







}


export default GradeCurricular;