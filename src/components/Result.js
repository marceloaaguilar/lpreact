import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './Result.css';
const Result = () => {

    const imageStyle = {
        
            
    }

    return (
        <div style={{paddingBottom: '5rem'}}>
            <Container style={{padding: '2rem'}}>
                <h2 style={{fontSize: '3rem', marginBottom: '2rem'}}> Obtenha um resultado perfeito</h2>
                <p style={{fontSize: '1.5rem'}}>Quer aprender a fazer mechas maravilhosas em cabelos cacheados, escuros ou claros? Saber manipular os melhores produtos e fazer a escolha certa para cada tipo de cabelo? Confira os resultados abaixo e aprenda com Junior Souza.</p>
            </Container>

            <div className='rowImages'>
                <Image className='imageResult' src='foto1Resultado.jpg'></Image>
                <Image className='imageResult' src='foto2Resultado.jpg'></Image>
                <Image className='imageResult' src='foto3Resultado.jpg'></Image>
            </div>
        </div>
    )
}

export default Result