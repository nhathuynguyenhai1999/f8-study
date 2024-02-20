import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HeaderTop from './components/header-component/header-top/index';
import Header from './components/header-component/header/index';
import PageContainer from './components/container/page-container/index';
import Menu from './components/menu-component/menu/index';
import SideBar from './components/sidebar/index';
import Footer from './components/footer-component/footer/index';
import HomePage from './pages/homepage/index';
import Furniture from './pages/furniture/index';
import CoffeeTable from './pages/coffee-table/index';
import Sofas from './pages/sofas/index';
import Bedroom from './pages/bedroom/index';
import ContactUs from './pages/contact-us/index';
import Login from './pages/login/index';

function App() {
  return (
    <>
      <HeaderTop />
      <PageContainer>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/furniture" exact element={<Furniture />} />
          <Route path="/coffee-table" exact element={<CoffeeTable />} />
          <Route path="/sofas" exact element={<Sofas />} />
          <Route path="/bedroom" exact element={<Bedroom />} />
          <Route path="/contact-us" exact element={<ContactUs />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
        <SideBar />
      </PageContainer>
      <Footer />
    </>
  );
}

export default App;
