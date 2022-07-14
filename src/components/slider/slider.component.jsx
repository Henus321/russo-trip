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
      'https://images.unsplash.com/photo-1602839424531-b73a03c15453?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1535383749833-770a4e09edec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1625780248192-cfdc2d61a996?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1592150587525-90486c792197?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1564241234953-1075d07f1c9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
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
            <h2 className="slider__title">
              <span className="slider__main-title">RUSSIA AWAITS</span>
              <span className="slider__under-title">
                Travel with Russo Trip
              </span>
            </h2>

            <img className="slider__image" src={slide.imageUrl} alt="Slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
