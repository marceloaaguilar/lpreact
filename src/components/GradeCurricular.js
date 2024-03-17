import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardCourse from './Card';
import Modules from './Modules';
import './GradeCurricular.css';


const GradeCurricular = () => {
    return (
        <div style={{paddingTop:'3rem'}}> 
        <Container>
            <Row>
                <Col xl={8} style={{textAlign: 'left'}}>
                    <h2>Grade Curricular</h2>
                    <Modules/>
                </Col>
                <Col xl={4}>
                    <CardCourse/>
                </Col>
            </Row>
        </Container>
        </div>
    )

}


export default GradeCurricular;