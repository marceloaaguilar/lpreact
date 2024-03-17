import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


const Instructor = () => {

    return (
        <Container  style={{paddingTop: '3rem', paddingBottom: '3rem'}}>
            <h2>Instrutor</h2>
            <p>Conheça quem vai te ajudar a ser fera em mechas!</p>
            <Image src='foto.png' style={{marginTop: '1rem', borderRadius: '100px'}}></Image>
            <h4 style={{paddingTop: '1rem'}}>Vanessa Cardozo</h4>
            <p>Técnica e Educadora</p>
            <p>Vanessa Cardozo é educadora especialista em treinamentos de alta performance para cabeleireiros há quase 20 <br/>anos. É produtora de conteúdo digital para área da beleza, gestora de um salão e sócia de uma distribuidora de <br/>cosméticos no Rio Grande do Sul.</p>
        </Container>






    )

}

export default Instructor