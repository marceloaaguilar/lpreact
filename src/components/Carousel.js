import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Button } from 'react-bootstrap';
import './Carousel.css';


const Carousel = function navbar() {
    return (
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
            <div id="slideDiv">
              <h4 style={{fontSize: '4rem', fontWeight: '400'}}>Mechas para todos os tipos de cabelo</h4>
              <h4 style={{fontSize: '2rem', fontWeight: '200',margin: '2rem 0'}}>Quer aprender a entregar resultados para clientes reais?  Nesse curso busquei cabelos reais, que ilustre a nossa realidade no dia dia, para ensinar a você a entregar resultados satisfatórios! Neste curso você aprenderá três técnicas de mechas, uma de morena iluminada, uma de louro médio, e uma super blond, sendo que uma dessas técnicas eu também trabalho a correção de cor! Você também terá uma aula bônus de colorimetria! Então esse curso é para você que quer começar a trabalhar com mechas ou deseja aprimorar suas técnicas! Garanto que com dedicação, através dessas técnicas você conseguirá atender 90% das clientes que sentarem em sua cadeira!</h4>
              <Button id="inscrever"> Inscreva-se Gratuitamente</Button>
            </div>
        </SwiperSlide>
      </Swiper>
    );
  };

  export default Carousel;