import React from 'react';
import styles from './styles.module.scss';

import Slider from 'react-slick';

import items from './data.js';

function SideBar() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <div className={styles.sidebar}>
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className={styles.box}>
            <img className={styles.img} src={item.imageUrl} key={item.id} alt={item.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default SideBar;
