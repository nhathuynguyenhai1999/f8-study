import React from 'react';

import HeaderTop from './components/header-component/header-top/index';
import Header from './components/header-component/header/index';
import PageContainer from './components/container/page-container/index';
import Menu from './components/menu-component/menu/index';
import SideBar from './components/sidebar/index';

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
        <SideBar />
      </PageContainer>
      <h1>Footer</h1>
    </>
  );
}

export default App;
