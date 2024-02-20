import { useSelector } from 'react-redux';
import styles from './styles.module.scss';
function ItemShop() {
  const items = useSelector((state) => state.cart.items);
  const deleteIcon = items.map((item) => (
    <div className={styles.remove}>
      <a href="/#">
        <ion-icon name="close-circle"></ion-icon>
      </a>
    </div>
  ));
  const image = items.map((item) => (
    <div className={styles.thumbnail}>
      <img src={item.imageUrl} alt="" />
    </div>
  ));
}

export default ItemShop;

export const deleteIcon() {

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
  ));)
}
