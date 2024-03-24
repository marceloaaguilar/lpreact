import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


const Instructor = () => {

    return (
        <Container  style={{paddingTop: '3rem', paddingBottom: '3rem'}}>
            <h2>Instrutor</h2>
            <p>Conheça quem vai te ajudar a ser fera em mechas!</p>
            <Image src='fotoInstrutor.png' style={{marginTop: '1rem', borderRadius: '100px', height: '13rem', width: '13rem', objectFit: 'cover'}}></Image>
            <h4 style={{paddingTop: '1rem'}}>Marco Antônio de Souza Júnior</h4>
            <p>Técnico e Educador</p>
            <p>Me chamo Marco Antônio de Souza Júnior profissionalmente mais conhecido como Júnior Souza, sou cabeleireiro há 10 anos, há três anos venho me especializando em colorimetria, mechas e corte, estou sempre em busca de conhecimentos para agregar valor no meu trabalho, há seis meses atuo como educador no curso de formação básica para cabeleireiros. Estou sempre em busca do autoconhecimento para um melhor desenvolvimento pessoal e profissional, acolhendo sempre as críticas e elogios, como também a autocrítica, confesso que sou um pouco perfeccionista (rsrsrs)! Atualmente estou começando a estudar a área de visagismo, com o intuito de prestar consultoria em corte e cor, para personalizar e proporcionar um resultado único para cada cliente! Estou também na reta final da faculdade de administração. Espero através desse pequeno curso gerar um diferencial e agregar valor na carreira de vocês, acho todo conhecimento bem vindo, e acredito que a sempre algo de novo a se aprender!</p>
        </Container>
    )

}

export default Instructor