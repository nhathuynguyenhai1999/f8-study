import React from 'react';
import styles from './styles.module.scss';

const image = [
  {
    id: 1,
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/avan.png',
  },
  {
    id: 2,
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/avio.png',
  },
  {
    id: 3,
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/avan.png',
  },
  {
    id: 4,
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/avan.png',
  },
  {
    id: 5,
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/avan.png',
  },
  {
    id: 6,
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/avan.png',
  },
];

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.box}>
        <img className={styles.img} src="../../assets/img/avan.png" alt="Avan" />
      </div>
      <div className={styles.box}>
        <img className={styles.img} src="../../assets/img/avio.png" alt="avio" />
      </div>
      <div className={styles.box}>
        <img className={styles.img} src="../../assets/img/lamino.png" alt="lamino" />
      </div>
      <div className={styles.box}>
        <img className={styles.img} src="../../assets/img/mbm.png" alt="mbm" />
      </div>
      <div className={styles.box}>
        <img className={styles.img} src="../../assets/img/nazic.png" alt="nazic" />
      </div>
      <div className={styles.box}>
        <img className={styles.img} src="../../assets/img/nova.png" alt="nova" />
      </div>
    </div>
  );
}
export default SideBar;
