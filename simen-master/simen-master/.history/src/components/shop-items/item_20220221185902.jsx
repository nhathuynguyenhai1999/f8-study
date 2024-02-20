import { useSelector } from 'react-redux';
import styles from './styles.module.scss';


export const deleteIcon() {
  const image = items.map((item) => (
  <div className={styles.thumbnail}>
    <img src={item.imageUrl} alt="" />
  </div>
));
  const items = useSelector((state) => state.cart.items);
  return(
  <>
items.map((item) => (
  <div className={styles.remove}>
      <a href="/#">
        <ion-icon name="close-circle"></ion-icon>
      </a>
    </div>
  </>
  )
}
