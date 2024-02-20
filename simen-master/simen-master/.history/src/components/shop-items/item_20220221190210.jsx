import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

function deleteIcon() {
  const items = useSelector((state) => state.cart.items);
  return ();
}

export default deleteIcon;
