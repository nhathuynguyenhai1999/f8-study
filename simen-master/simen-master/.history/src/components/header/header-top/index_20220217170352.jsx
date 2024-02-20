import React from 'react';
import styles from './styles.module.scss';

import FullWidth from '../../container/full-width/index';
import HeaderTopR from './header-topr/index';
import HeaderTopL from './header-topl/index';

function HeaderTop() {
  return (
    <FullWidth>
      <div className="header-top">
        <HeaderTopL />
        <HeaderTopR />
      </div>
    </FullWidth>
  );
}
export default HeaderTop;
