import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Navigation() {
    return (
        <div className="main">
            <div className="navigate">Navigation</div>
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
}
