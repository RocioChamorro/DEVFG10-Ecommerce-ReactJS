import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import AuthRouter from "./AuthRouter";
import DashboardRouter from './DashboardRouter';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="auth/*" element={<AuthRouter />} />
                <Route path="/*" element={<DashboardRouter />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter