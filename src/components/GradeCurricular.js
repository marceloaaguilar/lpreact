import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardCourse from './Card';
import Modules from './Modules';
import './GradeCurricular.css';


const GradeCurricular = () => {
    return (
        <div>
        <Container>
            <Row>
                <Col xl={8}>
                    <p>Grade Curricular</p>
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