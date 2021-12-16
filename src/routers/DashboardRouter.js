import React from 'react'
import { Routes, Route } from "react-router-dom";
import OutloginNavbar from '../components/navbar/OutloginNavbar';
import EcommerceScreen from '../ecommerce/EcommerceScreen';

const DashboardRouter = () => {
    return (
        <>
            <OutloginNavbar />
            <Routes>
                <Route path="/" element={<EcommerceScreen />} />
            </Routes>
        </>
    )
}

export default DashboardRouter