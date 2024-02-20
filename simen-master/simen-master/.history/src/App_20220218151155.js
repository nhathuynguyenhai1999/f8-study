import React from 'react';

import HeaderTop from './components/header-component/header-top/index';
import Header from './components/header-component/header/index';
import PageContainer from './components/container/page-container/index';
import Menu from './components/menu-component/menu/index';

function App() {
  return (
    <>
      <HeaderTop />
      <PageContainer>
        <Header />
        <Menu />
        <div style={{ height: '100rem' }}>
          <h1>Content</h1>
        </div>
        <h1>Footer</h1>
      </PageContainer>
    </>
  );
}

export default App;
