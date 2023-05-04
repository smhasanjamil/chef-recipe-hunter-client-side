import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    
    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <progress className="progress w-56"></progress>
            </div>
        )
    }
    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/login" replace={true} ></Navigate>;
};

export default PrivateRoute;