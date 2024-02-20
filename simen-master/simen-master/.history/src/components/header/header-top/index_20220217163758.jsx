import React from 'react';
import './styles.scss';
import FullWidth from '../../container/full-width/index';
import HeaderTopR from './header-topr/index';

function HeaderTop() {
  return (
    <FullWidth>
      <div className="header-top">
        <HeaderTopR />
      </div>
    </FullWidth>
  );
}
export default HeaderTop;
