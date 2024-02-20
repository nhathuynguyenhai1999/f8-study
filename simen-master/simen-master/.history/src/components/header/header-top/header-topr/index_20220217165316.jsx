import React from 'react';
import './styles.scss';

function HeaderTopR() {
  return (
    <div className="header-top__container">
      <a href="#" className="header-top__item header-top__item-right">
        <ion-icon name="person"></ion-icon>
        <span className="header-top__right-text">My Account</span>
      </a>
      <a href="#" className="header-top__item header-top__item-right">
        <ion-icon name="heart-outline"></ion-icon>
        <span className="header-top__right-text">Wishlist</span>
      </div>
      <a href="#" className="header-top__item header-top__item-right">
        <ion-icon name="checkbox-outline"></ion-icon>
        <span className="header-top__right-text">Checkout</span>
      </div>
      <a href="#" className="header-top__item header-top__item-right">
        <ion-icon name="checkbox-outline"></ion-icon>
        <span className="header-top__right-text">Login</span>
      </div>
    </div>
  );
}
export default HeaderTopR;
