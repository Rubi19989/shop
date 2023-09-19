import React from 'react';
import { Navigate, Outlet } from 'react-router';

const AuthRute = ({ canActivate, redirectPath = '/' }) => {
    const user = localStorage.getItem("user")
    if (!canActivate) {
        return <Navigate to={redirectPath} replace />
    }

    return <Outlet />
}
export { AuthRute }