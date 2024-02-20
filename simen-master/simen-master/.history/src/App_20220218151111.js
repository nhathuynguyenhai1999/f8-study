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
        <div>
          <h1>Content</h1>
        </div>
      </PageContainer>
    </>
  );
}

export default App;
