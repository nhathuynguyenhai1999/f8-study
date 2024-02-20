import { useSelector } from 'react-redux';

export const deleteIcon = items.map((item) => (
  <div className={styles.remove}>
    <a href="/#">
      <ion-icon name="close-circle"></ion-icon>
    </a>
  </div>
));
export const image = items.map((item) => (
  <div className={styles.thumbnail}>
    <img src={item.imageUrl} alt="" />
  </div>
));
