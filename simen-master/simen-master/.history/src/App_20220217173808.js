import React from 'react';

import HeaderTop from './components/header-component/header-top/index';
import Header from './components/header-component/header/index';
import PageContainer from './components/container/page-container/index';

function App() {
  return (
    <>
      <HeaderTop />
      <PageContainer>
        <Header />
      </PageContainer>
    </>
  );
}

export default App;
