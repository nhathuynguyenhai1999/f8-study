import React from 'react';
import './styles.scss';

function HeaderTopL() {
  return (
    <div className="container">
      <div className="item">
        <img
          src="http://demo.snstheme.com/wp/simen/wp-content/themes/snssimen/assets/img/en.jpg"
          alt="English"
          className="language"
        />
        <span>English</span>
        <ion-icon className="downicon" name="caret-down-outline"></ion-icon>
      </div>
      <div className="item">
        <span>USD</span>
        <ion-icon className="downicon" name="caret-down-outline"></ion-icon>
      </div>
    </div>
  );
}
export default HeaderTopL;
