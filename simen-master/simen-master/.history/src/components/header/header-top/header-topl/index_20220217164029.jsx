import React from 'react';
import './styles.scss';

function HeaderTopL() {
  return (
    <div className="header-top__container">
      <div className="header-top__item">
        <img
          src="http://demo.snstheme.com/wp/simen/wp-content/themes/snssimen/assets/img/en.jpg"
          alt="English"
          className="header-top__language"
        />
        <span>English</span>
        <ion-icon className="header-top__downicon" name="caret-down-outline"></ion-icon>
      </div>
      <div className="header-top__item">
        <span>USD</span>
        <ion-icon className="header-top__downicon" name="caret-down-outline"></ion-icon>
      </div>
    </div>
  );
}
export default HeaderTopL;
