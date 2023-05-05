import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {
    // Spinner
    const navigation = useNavigation();
    return (
        <div>
            
            <Header />

            <div>{navigation.state === "loading" ? "loading" : ""}</div>

            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;