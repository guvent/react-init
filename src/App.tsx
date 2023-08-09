import React from 'react';
import Dashboard from './Views/Dashboard';
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom';
import Navigation from './Layout/Navigation';

export default function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Dashboard />} />
                    <Route path="page" element={<>Page</>} />
                </Route>
                <Route path="/login" element={<>Login</>} />
                <Route path="*" element={<>NotFound</>} />
            </>
        )
    );

    return <RouterProvider router={router} />;
}
