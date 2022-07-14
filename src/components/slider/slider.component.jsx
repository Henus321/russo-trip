import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import './slider.styles.scss';

const data = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1612966809481-b84cb86ee3f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1540388482879-c02f7127c83f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1505551071487-d4a3fd384857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
  },
];

const Slider = () => {
  return (
    <div className="slider">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {data.map((slide, i) => (
          <SwiperSlide key={i}>
            <img className="slider__image" src={slide.imageUrl} alt="Slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
