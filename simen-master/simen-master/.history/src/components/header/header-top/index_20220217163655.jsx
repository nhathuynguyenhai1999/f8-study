import React from 'react';
import './styles.scss';
import FullWidth from '../../container/full-width/index';
import HeaderTopR from './header-topr/index';

function HeaderTop() {
  return (
    <FullWidth>
      <div className="header-top">
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
        <div className="header-top__container"></div>
      </div>
    </FullWidth>
  );
}
export default HeaderTop;
