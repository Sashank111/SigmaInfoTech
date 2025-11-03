import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Routing from './Routing';
import { useLocation } from 'react-router-dom';

const isAdminAuthenticated = () => {
    return !!localStorage.getItem('isAdminLoggedIn'); // use correct key
};

const App = () => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith('/admindashboard');

    return (
      <>
        <Header />
        {isAdminRoute ? (
          isAdminAuthenticated() ? (
            <Routing />
          ) : (
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '82vh', overflowX: 'hidden' }}>
              <h1 className="text-danger">Access Denied</h1>
            </div>
          )
        ) : (
          <Routing />
        )}
        <Footer />
      </>
    );
};

export default App;
