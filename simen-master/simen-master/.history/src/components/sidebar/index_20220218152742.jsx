import React from 'react';
import styles from './styles.module.scss';

const items = [
  {
    id: 1,
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/avan.png',
    alt: 'avan',
  },
  {
    id: 2,
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/avio.png',
    alt: 'avio',
  },
  {
    id: 3,
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/lamino.png',
    alt: 'lamino',
  },
  {
    id: 4,
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/mbm.png',
    alt: 'mbm',
  },
  {
    id: 5,
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/nazic.png',
    alt: 'nazic',
  },
  {
    id: 6,
    imageUrl: 'http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/nova.png',
    alt: 'nova',
  },
];

function SideBar() {
  return (
    <div className={styles.sidebar}>
      {items.map((item) => (
        <div className={styles.box}>
          <img className={styles.img} src={item.imageUrl} key={item.id} alt="Avan" />
        </div>
      ))}
    </div>
  );
}
export default SideBar;
