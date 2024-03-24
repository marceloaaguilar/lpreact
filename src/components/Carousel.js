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
              <h4 style={{fontSize: '2rem', fontWeight: '200',margin: '2rem 0'}}>Aulas teóricas e práticas, mostrando o passo a passo para execução perfeita de mechas nas mais variadas técnicas para todos os tipos de cabelos.</h4>
              <Button id="inscrever"> Inscreva-se Gratuitamente</Button>
            </div>
        </SwiperSlide>
      </Swiper>
    );
  };

  export default Carousel;