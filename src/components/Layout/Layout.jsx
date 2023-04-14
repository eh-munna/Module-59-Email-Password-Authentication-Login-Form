import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="container mx-auto px-2">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
