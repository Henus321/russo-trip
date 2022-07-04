import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './cities.styles.scss';

const Cities = () => {
  return (
    <>
      <div className="citites">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="slide1">Slide 1</SwiperSlide>
          <SwiperSlide className="slide2">Slide 2</SwiperSlide>
          <SwiperSlide className="slide3">Slide 3</SwiperSlide>
          <SwiperSlide className="slide4">Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Cities;
